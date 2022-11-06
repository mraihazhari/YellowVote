const cookieSession = require("cookie-session");
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const app = express();

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
  }
  
  app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());
  
  app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>');
  });
  
  app.get('/auth/google',
    passport.authenticate('google', { scope: [ 'profile' ] }
  ));
  
  app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
      successRedirect: 'http://localhost:3000/home',
      failureRedirect: '/auth/google/failure'
    })
  );
  
  
  app.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('Goodbye!');
  });
  
  app.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
  });
  
  app.listen(5000, () => console.log('listening on port: 5000'));