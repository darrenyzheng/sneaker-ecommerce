import { Router } from 'express';
import { getSneaker } from '../controllers/sneaker.controller.js';

const router = Router();

router.post('/', async (req, res) => {
    const sneaker_id = req.body.sneaker_id;

    const sneaker = await getSneaker(sneaker_id);
        if (sneaker) {
            return res.status(200).json(sneaker);
        }
            return res.status(404);
    })


export default router;