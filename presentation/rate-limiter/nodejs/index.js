const express = require("express");
const { rateLimit } = require("express-rate-limit");

const port = 3000;

// initialize an Express server
const app = express();

// define the rate limiting middleware
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    limit: 5, // each IP can make up to 5 requests per `windowsMs` (1 minutes)
    standardHeaders: true, // add the `RateLimit-*` headers to the response
    legacyHeaders: false, // remove the `X-RateLimit-*` headers from the response
});

// apply the rate limiting middleware to all endpoints
// app.use(limiter);

app.get("/", (req, res) => {
    res.send("Not limited!");
});
app.get("/limited", limiter, (req, res) => {
    res.send("Limited!");
});

// start the server
app.listen(port, () => {
    console.log(`Server listening at http://hostname:${port}`);
});
