const express = require("express");


const model = require('../../controllers/menu/func');

// create router object
let router = express.Router();


// /menu/
router.route("/").get( async(request, response) => {



    let categories = await model.getAllCategory();

    let itemsByCategory = { };

    // iterate through each category and calls the getItemByCategory method
    for (const category of categories) {
        let result = await model.getItemsByCategory(category.name);
        itemsByCategory[category.name] = result;
    }

    
    // for( let i=0; i<categories.length; i++){

    //     console.log( categories[i].name );
    //     itemsByCategory[categories[i].name].forEach(element => {
    //          console.log(element);
    //     });
        
    //     console.log( "-------" );
    // };




    response.status(200).render("menu/menu", { categories: categories, itemsByCategory:itemsByCategory});

} );


module.exports = router;