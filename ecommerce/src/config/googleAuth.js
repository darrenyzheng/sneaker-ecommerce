import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
dotenv.config()

const GOOGLE_CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: '/api/auth/google/redirect'
},
    (accessToken, refreshToken, profile, done) => {
        console.log(profile); // Log profile info for debugging
        return done(null, profile);
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id); // Store the user's ID in the session
});

export default passport; 