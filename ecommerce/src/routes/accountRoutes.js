import { Router } from 'express';
import { getTransactions } from '../controllers/transaction.controller.js';

const router = Router();

router.get('/', (req, res) => {
    if (req.isAuthenticated()) { 
        res.json({ user: req.user }); 
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
});

router.get('/transactions', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            const transactions = await getTransactions(req);
            res.status(200).json({ transactions });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ message: 'Server error' });
        }
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
});

router.post('/logout', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            await new Promise((resolve, reject) => {
                req.session.destroy(err => {
                    if (err) return reject(err);
                    resolve();
                });
            });

            res.clearCookie('connect.sid');
            return res.json({ message: 'Logout successful' });

        } catch (err) {
            return res.status(500).json({ message: "Logout failed", error: err });
        }
    }
    res.status(401).json({ message: "Not authenticated" });
});

router.get('/status', async (req, res) => {
    if (req.isAuthenticated()) {
        return res.status(200).json({ isAuthenticated: true });
    }
    return res.status(200).json({ isAuthenticated: false });
});


export default router;