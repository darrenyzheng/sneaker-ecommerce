import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.post('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/redirect',
    passport.authenticate('google', { session: true }),
    (req, res) => {
        console.log('Successfully logged in!');

        req.session.cart = {};
        req.session.save(err => {
            if (err) {
                console.error('Error saving session:', err);
            }
            else {
                res.redirect('http://localhost:5173'); 
            }
        });
    }
);

export default router;