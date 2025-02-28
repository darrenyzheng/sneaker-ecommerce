import { Router } from 'express';
import { addToCart, showCart, removeFromCart, checkout } from '../controllers/cart.controller.js';

const router = Router();

router.post('/add', async (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const successful = await addToCart(req); 

        console.log(successful);
        if (!successful) {
            return res.status(409).json({ error: "Not enough stock" });
        }

        res.status(200).json({ inCart: successful });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error });
    }
});

router.post('/delete', async (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const successful = await removeFromCart(req); 

        if (!successful) {
            return res.status(409).json({ error: "Server error." });
        }

        res.status(200).json({ message: "Successfully deleted." });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error });
    }
});

router.get('/', async (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const sneakers = await showCart(req);

        if (!sneakers) {
            return res.status(500).json({ error: "Server error fetching cart." });
        }

        res.status(200).json(sneakers);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error });
    }
});

router.post('/checkout', async (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const response = await checkout(req); 

        if (!response) {
            return res.status(500).json({ error: "Server error checking out." });
        }

        res.status(200).json({ message: 'Successful!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error checking out.", error });
    }
});

export default router;