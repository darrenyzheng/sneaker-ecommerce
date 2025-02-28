import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
import { User } from '../models/sequelize.js'; 
dotenv.config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: '/api/auth/google/redirect'
},
    async (accessToken, refreshToken, profile, done) => {
        let user = await User.findOne({
            where: { email: profile.emails[0].value },
        });
        
        if (!user) {
            user = await User.create({
                first_name: profile.name.givenName,
                last_name: profile.name.familyName,
                email: profile.emails[0].value,
                picture: profile.photos[0].value, 
                provider: 'google'
            });
        }

        return done(null, user); 

    }

));

passport.serializeUser((user, done) => {
    done(null, user.id); 
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findByPk(id); 
        done(null, user); 
    } catch (err) {
        done(err, null); 
    }
});

export default passport;