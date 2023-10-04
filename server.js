const express = require('express');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const path = require('path')


const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({path : 'config.env'});
const PORT = process.env.PORT || 3000;

// mongodb connection
connectDB();

app.use(bodyparser.urlencoded({ extended : true }));

app.set("view engine", "ejs");

app.use('/js',express.static(path.resolve(__dirname, "assets/js")));

app.use('/', require('./server/routes/router'));

app.listen(PORT, () => {console.log(`Server is running on http://localhost:${PORT}`)});

