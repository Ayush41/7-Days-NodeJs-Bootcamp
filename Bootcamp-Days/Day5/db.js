// NEED MONGOOSE TO CONNECT MONGODB DATABASE WITH NODEJS
// Database connectivity

// installing mongoose

const mongoose = require('mongoose');

// Define the mongoDB connection url
const mongoURL = 'mongodb://localhost:27017/hotels' //hotels is the db

// setup mongodb connection established

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

db.on