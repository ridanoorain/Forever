import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

import { v2 as cloudinary } from 'cloudinary';

import crypto from 'crypto';
import authRouter from './routes/authRoute.js';
import orderRouter from './routes/orderRoute.js';

const app = express();
const API_SECRET = process.env.API_SECRET;

// Middleware to generate the signature
const signatureMiddleware = (req, res, next) => {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const signature = crypto
    .createHmac('sha1', API_SECRET)
    .update(`timestamp=${timestamp}`)
    .digest('hex');

  req.apiAuth = { signature, timestamp };
  next();
};

// Route using the signature
app.get('/protected', signatureMiddleware, async (req, res) => {
  const { signature, timestamp } = req.apiAuth;
  res.json({ signature, timestamp, status: 'Authenticated!' });
});


//App Config


const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

//Middlewares
app.use(express.json());
app.use(cors());

//API endpoints
app.use('/api/user',userRouter);
app.use('/api/product',productRouter);
app.use('/api/cart',authRouter);
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send('API Working')
})

app.listen(port,()=>console.log("Server started on port: "+port))