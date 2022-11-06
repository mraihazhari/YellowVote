const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;



const GOOGLE_CLIENT_ID = "788744882510-ri1k7f5496jshguqtv1fuvuhjhda486t.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
passport.use(

    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
        scope: ["profile"],
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );


passport.serializeUser((user,done)=>{
    done(null, user)
})

passport.deserializeUser((user, done)=>{
    done(null, user)
})
