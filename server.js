// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
mongoose  	   = require('mongoose');
var Meme       = require('./app/models/meme');

mongoose.connect('mongodb://127.0.0.1:27017'); // con

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port



// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.route('/memes')

    // create a meme (accessed at POST http://localhost:8080/api/memes)
    .post(function(req, res) {
        var meme = new Meme();      // create a new instance of the meme model
        meme.ticker = req.body.ticker;  // set the memes name (comes from the request)
        meme.name = req.body.name;
        meme.charity = req.body.charity;
        meme.price = req.body.price;
        meme.save(function(err) {
            if (err)
               	res.send(err);

            res.json({ message: 'Meme created!' });
        });
    })

    .get(function(req, res) {
        Meme.find(function(err, memes) {
            if (err)
                res.send(err);

            res.json(memes);
        });
    });

router.route('/memes/:meme_id')

    // get the meme with that id (accessed at GET http://localhost:8080/api/memes/:meme_id)
    .get(function(req, res) {
        Meme.findById(req.params.meme_id, function(err, meme) {
            if (err)
                res.send(err);
            res.json(meme);
        });
    })

    // update the meme with this id (accessed at PUT http://localhost:8080/api/memes/:meme_id)
    .put(function(req, res) {
        // use our meme model to find the meme we want
        Meme.findById(req.params.meme_id, function(err, meme) {
            if (err)
                res.send(err);

            meme.name = req.body.name;  // update the memes info
            meme.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Meme updated!' });
            });
        });
    })

    .delete(function(req, res) {
        Meme.remove({
            _id: req.params.meme_id
        }, function(err, meme) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);