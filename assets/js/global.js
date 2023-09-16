"use strict"

/*
 * Add event on multiple elements
 */
/**
 * 
 * @param {NodeList} elements 
 * @param {String} event 
 * @param {Function} callback 
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



/**
 * Adds the parameters needed for a movie detail UI to the local storage.
 * Add MovieID data to the localStorage
 * @param {Number} movieID 
 */
const getMovieDetail = function(movieID){
    window.localStorage.setItem("movieID", String(movieID));
}



/**
 * Adds the parameters needed for a movie list UI to the local storage.
 * a movie list UI for a particular genre "getMovieList(`with_genre=5`, `Action`)"
 * a movie list UI for a particular language "getMovieList(`with_language=34`, `Hindi`)""
 * 
 * @param {String} urlParam 
 * @param {String} categoryName 
 */
const getMovieList = function(urlParam, categoryName) {
    window.localStorage.setItem("urlParam", urlParam);
    window.localStorage.setItem("categoryName", categoryName);
}


