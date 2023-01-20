//import modules
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();


//app
const app = express()


//middelware
app.use(morgan("dev"))
app.use(cors({origin: true, credentials: true}))

//db
mongoose.connect('mongodb+srv://Qiuser:v9dI5DM6ndEKQBx4@cluster0.dcswden.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


//middleware
app.use(morgan("dev"));
app.use(cors())

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB.');
});

//routes
const testRoutes = require('./routes/test');
app.use("/", testRoutes); 

//port
const port = process.env.PORT || 8080;


//listener
const server = app.listen(port, () => console.log(`Server is running port ${port}`));
