import express from "express";
import { addToCart, getUserCart, updateCart } from "../controllers/cartController.js";
import authUser from "../middleware/auth.js";

const authRouter = express.Router();

authRouter.post('/get',authUser,getUserCart );
authRouter.post('/add',authUser,addToCart );

authRouter.post('/update',authUser,updateCart );

export default authRouter;