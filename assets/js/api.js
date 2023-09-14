"use strict"


const api_key = "964a4ec4df2918b9ec7512ea46440c95";
const imageBaseURL = "https://image.tmdb.org/t/p/";


/**
 * 
 * a functin that fetches data from a specified url
 * and then calls a function (callback)
 * passing the data fetched as a json format to the callback function
 * it also passes a specifed object if specified to the callback function
 * 
 * @param {string} url 
 * @param {function} callback 
 * @param {object} optionalParameter 
 */
const fetchDataFromServer = function (url, callback, optionalParameter) {
    fetch(url).then(response => response.json()).then(data => callback(data, optionalParameter));
}


export {api_key, imageBaseURL, fetchDataFromServer};