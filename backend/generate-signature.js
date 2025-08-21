import crypto from 'crypto';
import { v2 as cloudinary } from 'cloudinary';

const timestamp = Math.floor(Date.now() / 1000);
const apiSecret = 'ojPPM_bQTOCjovh5Rvvq7GaaNxs'; // Keep this secret in backend only

const stringToSign = `timestamp=${timestamp}`;
const signature = crypto
  .createHash('sha1')
  .update(stringToSign + apiSecret)
  .digest('hex');

console.log('Timestamp:', timestamp);
console.log('Signature:', signature);
