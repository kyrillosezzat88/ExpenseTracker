const Route = require('express').Router();
const {getTransactions , AddTransactions , DeleteTransactions} = require('../Controllers/TransController')

//Get Transacrion Route 
Route.get('/' , getTransactions);
//Add Transaction Route
Route.post('/add' , AddTransactions);

//Delete Transactions Route 
Route.delete('/:id' , DeleteTransactions);


module.exports = Route;