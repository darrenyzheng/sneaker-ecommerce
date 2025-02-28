import express from 'express';
import googleRoutes from '../routes/googleRoutes.js';
import productRoutes from '../routes/productRoutes.js';
import cartRoutes from '../routes/cartRoutes.js';
import accountRoutes from '../routes/accountRoutes.js';
import shopRoutes from '../routes/shopRoutes.js';
import checkoutRoutes from '../routes/checkoutRoutes.js';
import Stripe from 'stripe';
import googleAuth from '../config/googleAuth.js';
import passport from 'passport';
import cors from 'cors';
import session from 'express-session';
import { RedisStore } from 'connect-redis';
import { createClient } from "redis";
import { initDatabase } from '../models/sequelize.js';
import dotenv from 'dotenv';

dotenv.config();

const REDIS_SECRET = process.env.REDIS_SECRET;

const client = createClient({
    username: 'default',
    password: REDIS_SECRET,
    socket: {
        host: 'redis-19977.c263.us-east-1-2.ec2.redns.redis-cloud.com',
        port: 19977
    }
});

client.on('error', err => console.log('Redis Client Error', err));

// Ensure Redis connection occurs after the server starts
const initRedis = async () => {
    await client.connect();
};


let redisStore = new RedisStore({
    client: client,
    prefix: "sneaker-ecommerce"
});

const port = 5000;
const app = express();

app.use(session({
    secret: 'keyboard cat',

    store: redisStore,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24
}));

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}
));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', googleRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/account', accountRoutes);
app.use('/api/product', productRoutes);
app.use('/api/shop', shopRoutes);
app.use('/api/checkout', checkoutRoutes);


app.listen(port, (error) => {
    if (!error) {
        console.log(`Server is running on ${port}`)
    }
    else { "Error occurred, server can't start", error }
})


initDatabase();
