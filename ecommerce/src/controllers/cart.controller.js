import { Sneaker } from '../models/sequelize.js';
import { createTransaction } from './transaction.controller.js';
import { updateStock } from './sneaker.controller.js';

async function addToCart(req) {
    const cart = req.session.cart;
    const { id, quantity, stock } = req.body;

    if (stock == 0) {
        return false;
    }
    if (cart[id] && (cart[id] + quantity) > stock) {
        return false; 
    }

    cart[id] = (cart[id] || 0) + quantity;

    return new Promise((resolve, reject) => {
        req.session.save(err => {
            if (err) {
                console.error('Error saving session:', err);
                reject(err);
            } else {
                console.log('Successfully saved!');
                resolve(cart[id]);
            }
        });
    });
}

async function showCart(req) {
    const cart = req.session.cart;

    if (Object.keys(cart).length === 0) {
        return [];
    }

    try {
        const sneakers = await Promise.all(
            Object.keys(cart).map(async (sneaker_id) => {
                const sneaker = await Sneaker.findOne({ where: { id: parseInt(sneaker_id, 10) } });

                if (sneaker) {
                    return { ...sneaker.toJSON(), quantity: cart[sneaker_id] };
                }
                return null;
            })
        );

        return sneakers
    } catch (err) {
        console.error('Error finding sneakers', err);
        throw err;
    }
}

async function removeFromCart(req) {
    const cart = req.session.cart;
    const { id } = req.body;

    if (!cart[id]) {
        return false;
    }

    delete cart[id];

    return new Promise((resolve, reject) => {
        req.session.save(err => {
            if (err) {
                console.error('Error saving session:', err);
                reject(err);
            } else {
                console.log('Successfully saved!');
                resolve(true);
            }
        });
    });
}


async function checkout(req) {
    const cart = req.session.cart;
    const user_id = req.user.id;

    try {
        const sneakers = await Promise.all(
            Object.keys(cart).map(async (sneaker_id) => {
                const sneaker = await Sneaker.findOne({ where: { id: parseInt(sneaker_id, 10) } });

                if (sneaker) {
                    const quantity = cart[sneaker_id];
                    await updateStock(parseInt(sneaker_id, 10), quantity);
                    return sneaker;
                }
                return null;
            })
        );

        if (sneakers.length > 0) {
            await createTransaction(sneakers.filter(sneaker => sneaker !== null), cart, user_id);
        }

        req.session.cart = {};
        await new Promise((resolve, reject) => {
            req.session.save((err) => {
                if (err) {
                    console.error('Error saving session:', err);
                    reject(err);
                } else {
                    console.log('Successfully saved session after checkout!');
                    resolve(true); 
                }
            });
        });

        return true; 

    } catch (err) {
        console.error('Error during checkout:', err);
        throw err; 
    }
}

export { addToCart, showCart, removeFromCart, checkout };