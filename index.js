const express =require('express');
const port = 2612;
const app = express();
const mongoose = require('mongoose');
const dbConnect = require('./config/dbConnection');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());

app.use('/book', require('./routes/bookRoutes'));
app.get('/', (req, res) => {
    return res.render('index');
})

app.listen(port, () => {


    console.log(`Server Start at http://localhost:${port}`);
})