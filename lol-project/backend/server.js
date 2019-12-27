const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//get the environment variable for database connection
const uri = process.env.ATLAS_URI;

//use mongoose package and the environment variable to connect to database
mongoose.connect(uri, { useNewUrlParser: true,useCreateIndex: true}
);

//store the connection into a variable
const connection = mongoose.connection;

//open the database
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const historiesRouter = require('./routes/histories');
const usersRouter = require('./routes/users');

app.use('/histories', historiesRouter);
app.use('/users', usersRouter);

app.listen(port, () =>{
    console.log('Server is running on port:', port);
});