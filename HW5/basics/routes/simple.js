
const routes = require('express').Router();

// Add your route here...
routes.get("/dayofweek",(req,res) => {
    let dew = new Date().getDay();
    res.send(dew.toString());
});

module.exports = routes;
