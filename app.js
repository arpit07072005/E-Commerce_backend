
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json());

import router from './Routes/Payment.route.js';
app.use('/',router)

export default app;


