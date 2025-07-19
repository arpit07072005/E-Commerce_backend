import razorpay from "../Utils/Razorpay.util.js";
import crypto from 'crypto';
export const CreateOrder= async (req, res)=>{
    const {amount}=req.body;
  const options = {
    amount : amount*100,
    currency : 'INR',
    receipt: 'receipt#1',
    payment_capture: 1,
  };

  try{
const response = await razorpay.orders.create(options);
res.json(response);
  }catch (err) {
    res.status(500).send('Order creation failed');
  }
};

export const verifyPayment = async (req , res)=>{
 const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const sign = crypto
    .createHmac('sha256', process.env.KEY_SECRET)
    .update(razorpay_order_id + '|' + razorpay_payment_id)
    .digest('hex');
 if (sign === razorpay_signature) {
    res.json({ msg: 'Payment Verified 🎉' });
  } else {
    res.status(400).json({ msg: 'Payment verification failed ⚠️' });
  }

};