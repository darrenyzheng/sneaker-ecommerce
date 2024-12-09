import express from 'express';
import googleRoutes from './src/routes/googleRoutes.js';
import googleAuth from './src/config/googleAuth.js';
import passport from 'passport';
import cors from 'cors';
import session from 'express-session';

const port = 5000;

const app = express();

app.use(session({
    secret: 'your_secret_key', 
    // session saved on every request only when session data has been directly modified 
    resave: false,
    // save a new, unmodified session unless data is added to it, true when tracking site visits 
    saveUninitialized: false,
    // secure false so that it can be used with http protocol for localhost
    cookie: { secure: false } 
}));

app.use(express.json());
app.use(cors());

// boiler plate needed for passport to initialize for authentication and passport, adding the functionality for requests 
app.use(passport.initialize());

// boiler plate needed for passport to integrate Passport with session-based authentication, allowing for deseralization user object 
// and persist across requests 
app.use(passport.session()); 

// mounts or sets middleware, routes to a specific path. sends requests to /api/auth (base path), where the google routes will be 
// accessible from 
app.use('/api/auth', googleRoutes);

app.listen(port, (error) => {
    if (!error) {
        console.log(`Server is running on ${port}`)
    }
    else { "Error occurred, server can't start", error }
})
