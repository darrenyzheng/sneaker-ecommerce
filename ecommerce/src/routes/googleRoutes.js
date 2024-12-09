import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.post('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/redirect',
    passport.authenticate('google', { session: true }),
    (req, res) => {
        // Authentication successful, send a JSON response
        res.redirect('http://localhost:5173'); // Corrected the URL with a double slash
        console.log('yes');
    }
);

export default router;