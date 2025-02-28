
import { Router } from 'express';
import { Sneaker } from '../models/sequelize.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const sneakers = await Sneaker.findAll();
        res.json(sneakers);
    }
    catch (err) {
        console.error(`Error:`, err);
    }
})

export default router;