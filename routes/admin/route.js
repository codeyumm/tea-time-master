const express = require('express');

const model = require('../../controllers/menu/func')
const connection = require('../../controllers/database/db'); 


// create router object
let router = express.Router();



// route for - /admin
router.route("/").get( async(request, response) => {

    // getting items from database

    let items = await model.getItems();
    let hotTea = await model.getHotTea();
    let iceTea = await model.getIcedTea();
    let snacks = await model.getSnacks();
    let popularItems = await model.getPopularItems();

    // count the length of the array to get the count of the items
    let itemsCount = items.length;
    let hotTeaCount = hotTea.length;
    let iceTeaCount = iceTea.length;
    let snacksCount = snacks.length;
    let popularItemsCount = popularItems.length;

    response.render("admin/dashboard", {
        itemsCount: itemsCount, hotTeaCount:hotTeaCount,
        iceTeaCount: iceTeaCount, snacksCount: snacksCount,
        popularItemsCount:popularItemsCount
    });

})



// route for - /admin/add-products
router.route("/add-product").get( async (request, response) => {
    
    // get category names from database to display in form
    let categories = await model.getAllCategory();

    response.render("admin/add-product", {categories: categories});

})


// route for - /admin/add-products for post request
router.route("/add-product").post( async (request, response) => {

    // get the data of new item
    console.log(request.body.price);

    request.body.price = parseInt(request.body.price);
    
    // set default image if user doesnt leaves the image field blank
    if( !request.body.image ){
        request.body.image = "https://placehold.co/600x800";
    } 

    newItem = request.body

    // connect to database
    let db = await connection();

    // add item to database
    let isItemAdded = db.collection('items').insertOne( newItem );


    response.redirect("/menu");

})

module.exports = router;