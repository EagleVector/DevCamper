const express = require("express");
const dotenv = require("dotenv");
const app = express();
const morgan = require('morgan');

// Route files
const bootcamps = require('./routes/bootcamps');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Dev logging middleware
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}


// Mount Routers
app.use('/api/v1/bootcamps', bootcamps);
const PORT = process.env.PORT || 5000;

app.listen(
  PORT, 
  console.log(`Server Running in ${process.env.NODE_ENV} mode on PORT: ${PORT}`)
);