const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;



const GOOGLE_CLIENT_ID = "788744882510-ri1k7f5496jshguqtv1fuvuhjhda486t.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    //User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //return cb(err, user);
    //});
    done(null, profile)
  }
));


passport.serializeUser((user,done)=>{
    done(null, user)
})

passport.deserializeUser((user, done)=>{
    done(null, user)
})
