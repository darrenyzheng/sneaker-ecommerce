import { Router } from 'express';
import Stripe from 'stripe';
import { getSneaker } from '../controllers/sneaker.controller.js';
import dotenv from 'dotenv';

dotenv.config();

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
const router = Router();
const stripe = new Stripe(STRIPE_SECRET_KEY);

router.post('/create-checkout-session', async (req, res) => {
    try {
        const cart = req.session.cart;
        const sneakers = await Promise.all(
            Object.keys(cart).map(async (sneaker_id) => {
                try {
                        const sneaker = await getSneaker(sneaker_id);
                        if (sneaker) {
                            return sneaker;
                        } else {
                            throw new Error(`No response for sneaker_id: ${sneaker_id}`);
                        }
                    } catch (error) {
                        console.error(error);
                        return null;
                    }
                })
        );

        const taxRate = await stripe.taxRates.create({
            display_name: 'Sales Tax',
            description: 'Sales Tax',
            jurisdiction: 'US',
            percentage: 10,
            inclusive: false,
        });

        const lineItems = sneakers.flat().map(sneaker => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: sneaker.name,
                },
                unit_amount: sneaker.resell_price * 100,
            },
            quantity: cart[sneaker.id],
            tax_rates: [taxRate.id]
        }));


        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            ui_mode: 'embedded',
            mode: 'payment',
            return_url: `${req.get('origin')}/return?session_id={CHECKOUT_SESSION_ID}`,
        });

        res.send({ clientSecret: session.client_secret });
    } catch (err) {
        console.error('Error creating checkout session:', err);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

router.get('/session-status', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
        res.send({
            status: session.status,
            customer_email: session.customer_details.email
        });
    }
    catch (err) {
        res.status(500).send({ error: 'Failed to retrieve session status' });
    }
});

export default router;