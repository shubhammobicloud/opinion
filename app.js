const express = require('express')
const databaseConnection = require('./utils/db.utils')
const morgan = require('morgan');
const cors = require('cors');
const mainRoute = require('./routes/main.route');
const errorHandler = require('./controllers/error/error.controller');

const app = express()

app.use(morgan('combined'));
app.use(express.json());
app.use(cors());
app.use(mainRoute);
app.use(errorHandler);

databaseConnection().then(()=>{
    app.listen(3000,()=>{
        console.log("server running on 3000")
    })
}).catch((err)=>{
    throw err
})