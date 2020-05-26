require('dotenv').config();
const app = require('./src/app');

const Port = process.env.PORT || 5000;

app.listen(Port , () => console.log(`Server Connect Succesfully on Port ${Port} `));