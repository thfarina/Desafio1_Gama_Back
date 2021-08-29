const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
require('dotenv').config();


// App
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, { useNewUrlParser: true }).catch(err => {
    console.log('Erro ao tentar se conectar com o MongoDB');
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
            'Mongoose default connection is disconnected due to application termination'
            );
            process.exit(0);
        });
    });

// Load models
const Forms = require('./models/forms');
    
// Load routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

const formRoutes = require('./routes/forms-routes');
app.use('/form', formRoutes);



module.exports = app;