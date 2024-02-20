console.log("hello from script.js");

window.onload = function() {

    // get dom elements
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("#nav-menu");


    // add click event on hamburger dic
    hamburger.addEventListener('click', () => {
    
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    
    
    } )

    const itemDiv = document.querySelectorAll('.item-image');
    console.log(itemDiv);
    
    itemDiv.forEach(element => {
        element.classList.add ('custom-cursor');
    });

}