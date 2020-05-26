const express = require('express');
const mongoose = require('mongoose');
const Route = require('./Routes/v1')
const app = express();

//-------------DB Config ------------//
mongoose.connect(process.env.MONGO_URI , {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
});
mongoose.connection.once('connected' , () => console.log('Mongodb Connected')).on('error' , (err) => console.log({MongoError:err}));

//-------------Middelwares ------------//
app.use(express.json());

//-------------Routes ------------//
app.use('/api/v1/transactions' , Route);

module.exports = app;