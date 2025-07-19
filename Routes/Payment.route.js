import express from 'express';
import { CreateOrder, verifyPayment } from '../Controller/Payment.controller.js';

const router =express.Router();

router.post('/order', CreateOrder);
router.post('/verify',verifyPayment);
export default router;