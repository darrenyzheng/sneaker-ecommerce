import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import cors from 'cors';
import session from 'express-session';
import { RedisStore } from 'connect-redis';
import { createClient } from "redis";
import Stripe from 'stripe';

import googleRoutes from '../src/routes/googleRoutes.js';
import productRoutes from '../src/routes/productRoutes.js';
import cartRoutes from '../src/routes/cartRoutes.js';
import accountRoutes from '../src/routes/accountRoutes.js';
import shopRoutes from '../src/routes/shopRoutes.js';
import checkoutRoutes from '../src/routes/checkoutRoutes.js';

import googleAuth from '../src/config/googleAuth.js';
import { initDatabase } from '../src/models/sequelize.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const REDIS_SECRET = process.env.REDIS_SECRET;

let client;

const initRedis = async () => {
    if (!client) {
        client = createClient({
            username: 'default',
            password: REDIS_SECRET,
            socket: {
                host: 'redis-19977.c263.us-east-1-2.ec2.redns.redis-cloud.com',
                port: 19977
            }
        });

        client.on('error', err => console.error('❌ Redis Client Error:', err));

        await client.connect();
        console.log("✅ Redis connected successfully!");
    }
};

initRedis().then(() => {
    const redisStore = new RedisStore({
        client: client,
        prefix: "sneaker-ecommerce"
    });

    app.use(session({
        secret: 'keyboard cat',
        store: redisStore,
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false, httpOnly: true, maxAge: 1000 * 60 * 60 * 24 }
    }));

    app.use(express.json());
    app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use('/api/auth', googleRoutes);
    app.use('/api/cart', cartRoutes);
    app.use('/api/account', accountRoutes);
    app.use('/api/product', productRoutes);
    app.use('/api/shop', shopRoutes);
    app.use('/api/checkout', checkoutRoutes);

    app.listen(port, (error) => {
        if (error) {
            console.error("❌ Server startup error:", error);
        } else {
            console.log(`🚀 Server is running on port ${port}`);
        }
    });

    initDatabase();
}).catch(err => {
    console.error("❌ Failed to initialize Redis:", err);
    process.exit(1); 
});

export default app;
