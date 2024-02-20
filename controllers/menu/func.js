

// get method to connect to database
const connection = require('../../controllers/database/db');
const { MongoClient } = require("mongodb");

// function to get all items from database
async function getItems(){

    // connect to database
    let db = await connection();

    let result = await db.collection('items').find({});
    let res = await result.toArray();


    return res;
}


// function to get all hot tea from database
async function getHotTea(){

    // connect to database
    let db = await connection();

    let result = await db.collection('items').find({ category: "Hot tea"});
    let res = await result.toArray();


    return res;
}


// function get all iced tea from database
async function getIcedTea(){

    // connect to database
    let db = await connection();

    let result = await db.collection('items').find({ category: "Iced tea"});
    let res = await result.toArray();

    return res;
}

// function get all snacks item from database
async function getSnacks(){

    // connect to database
    let db = await connection();

    let result = await db.collection('items').find({ category: "Snacks"})
    let res = await result.toArray();

    console.log(res);

    return res;
}

// function get all popular items from database
async function getPopularItems(){

    // connect to database
    let db = await connection();

    let result = await db.collection('items').find({ isPopular: true });
    let res = await result.toArray();

    return res;
}

// function to get all category of menu
async function getAllCategory(){

    // connect to database
    let db = await connection();

    // perform query on database and store the result
    let result = await db.collection('category').find( {} );

    // convert reult into the array
    let res = await result.toArray();

    return res;
}

// function get items by category
async function getItemsByCategory(category){

    // connect to database
    let db = await connection();

    // perform query on database and store the result
    let result = await db.collection('items').find( {category: category});

    // convert result into the array
    let res = await result.toArray();

    return res;
}


module.exports = { 
                    getItems, 
                    getPopularItems, 
                    getHotTea, 
                    getIcedTea, 
                    getSnacks,
                    getAllCategory,
                    getItemsByCategory
                    
                };


/* 
    title, desc, price, image, isPopular, category

*/