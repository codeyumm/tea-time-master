// get express module
const express = require('express');

const dotenv = require('dotenv').config();

// get path module - it helps to deal with file path
const path = require('path');

// create an express app
const app = express();

// set port for the server
const port = process.env.PORT || "8888";


// set path for views
app.set("views", path.join(__dirname, "views"));

// app.set("controllers", path.join(__dirname, "controllers"));

// set path for static file like css,js amd images
app.use(express.static(path.join(__dirname, "public")))

// set template engine
app.set("view engine", "pug");

app.use(express.urlencoded( {extended: true} ));
app.use(express.json());

// getting all routes filed

//get the routes for the menu
const menuRoutes = require('./routes/menu/route');

//get the routes for the admin
const adminRoutes = require('./routes/admin/route')

// get the routes for the index
const indexRoutes = require('./routes/index/route');
const exp = require('constants');




// use the  menu/route.js file to handle
// reuqest which starts with /menu

app.use("/menu", menuRoutes);

// use the admin/route.js file to handle
// request which starts with /admin

app.use("/admin", adminRoutes);

// use the index/route.js file to handle
// request which starts with /
app.use("/", indexRoutes);



// start app to listen for request
app.listen( port, () => {

    console.log(`Server is listening on http://localhost:${port}`)

})
