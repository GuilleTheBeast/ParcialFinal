const morgan = require('morgan');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');


const app = express();

//connecting to DB
mongoose.connect('mongodb+srv://GuilleTheBeast:daniel1199@firstcluster-bvjxg.mongodb.net/test?retryWrites=true&w=majority')
.then(db => console.log('DB conected'))
.catch(err => console.log(err));


//import routes
const indexRoutes = require('./routs/index');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));


//routes

app.use('/', indexRoutes);

//starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

