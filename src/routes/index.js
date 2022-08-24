const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const userRouter = require('../routes/user.js');

const app= express()         
const { HTTP_PORT = 3000 } = process.env;  // establecemos nuestro puerto

//middleware
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true})); 

app.use(userRouter);

app.listen(HTTP_PORT)
console.log('API escuchando en el puerto ' + HTTP_PORT)