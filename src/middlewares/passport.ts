import Auth0Strategy from "passport-auth0";

const auth0Strategy = new Auth0Strategy(
  {
    domain: "dev-h0ojaj42rqgak4y1.us.auth0.com",
    clientID: "00c1yjJyAM0fGK6INJPDRMktjy6cKakk",
    clientSecret:
      "LBoOIp0tUshyzfJAkZHygpDBJ7Kz7vXbypVfiveSqFsfEq7RMrzh1g_jZyCwzZvB",
    callbackURL: "http://localhost:3000",
    passReqToCallback: true,
    state: false,
  },
  function (req, accessToken, refreshToken, extraParams, profile, done) {
    //
    // State value is in req.query.state ...
    //

    return done(null, profile);
  }
);

export default auth0Strategy;
