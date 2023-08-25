"use strict"

/*
 * Add event on multiple elements
 */
const addEventOnElements = function (elements, event, callback) {
    for (const elem of elements) elem.addEventListener(event, callback);
}


/*
 * Toggle Search Box
 */
const searchTogglers = document.querySelectorAll("[search-toggler]");
const searchBox = document.querySelector("[search-box]");

addEventOnElements(searchTogglers, 'click', function(){
    searchBox.classList.toggle("active");
})