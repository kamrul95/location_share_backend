const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places-routes')

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/places', placesRoutes);

app.use((error, req, res, next)=> {
    if(res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || "An unknown error occurred"})
})


app.listen(5000);
