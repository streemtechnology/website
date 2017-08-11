import express from "express";
import passport from "passport";
import bodyParser from "body-parser";
import Strategy from "passport-custom";
import compression from "compression";

const BIG_KEY = "the-big-key";

passport.use(
  "apikey-local",
  new Strategy(function(req, done) {
    const apiKey = req.query["api-key"];

    if (!apiKey) {
      return done(null, false);
    }

    // do some magic authentication
    if (apiKey === BIG_KEY) {
      return done(null, { name: "P dawg" });
    }

    return done(null, false);
  })
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

const app = express();
app.disable("x-powered-by");
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use(compression());
app.get("/api", (req, res) =>
  res.json({
    default: "Streem API v0.0.1",
    docs: "http://46.101.241.38:8080/docs/#!/default/statusPollIdGET}"
  })
);

app.get(
  "/api/auth",
  passport.authenticate("apikey-local", { failureRedirect: "/" }),
  (req, res) => res.send({ result: "authenticated" })
);

// Create an http listener for our express app.
const listener = app.listen(3020, () =>
  console.log(`API listening on port 3020`)
);

export default listener;
