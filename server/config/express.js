const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    products = require('../routes/Products'),
    auth = require('../routes/auth'),
    users = require('../routes/Users'),
    paypal = require('../routes/PayPal'),
    stripe = require('../routes/Stripe');

module.exports.init = () => {

    mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);


    // initialize app
    const app = express();

    var cors = require('cors');

    app.use(cors());

    app.get('/', (req, res) => res.send('API Running'));


    // enable request logging for development debugging
    app.use(morgan('dev'));

    // body parsing middleware
    app.use(bodyParser.json({limit: '10mb', extended: true}))
    app.use('/uploads', express.static('uploads'));
    // add a router

    app.use('/products', products);
    app.use('/auth', auth);
    app.use('/users', users);
    app.use('/', stripe);
    app.use('/', paypal);

    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function (req, res) {
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }

    return app
}