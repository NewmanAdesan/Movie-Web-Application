
"use strict"

import { api_key, fetchDataFromServer } from "./api.js";
import { createMovieCardUI } from "./movie-card.js";
import { createSeachModalUI } from "./search.js";
import {createSideBarUI} from "./sidebar.js"








/***********************************************************************
 * Add the sidebar to the home page
 ***********************************************************************/
createSideBarUI();












/***********************************************************************
 * ADD THE MOVIE LIST UI TO THE MOVIE-LIST PAGE (SIX TASKS)
 * 1. obtain the parameters: urlparams & categoryName parameter
 * 2. fetch movie list UI data: movie data
 * 3. dynamically title the page based on movie name.
 * 4. create a skelenta movie list UI
 * 5. complete movie list UI: insert each movie card UI
 * 6. complete movie list UI: implement load more functionality
 * 6. complete movie list UI: add to DOM
 **********************************************************************/

/**
 * OBTAIN THE NECESSARY PARAMETERS
 */
const categoryName = window.localStorage.getItem("categoryName");
const urlParam = window.localStorage.getItem("urlParam");


let currentPage = 1;


/**
 * FETCH MOVIE LIST UI DATA
 */
fetchDataFromServer(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc&${urlParam}`, function({results: movieList, total_pages}){


    /**
     * SET PAGE TITLE
     */
    document.title = `${categoryName} Movies - Tvflix`;


    /**
     * CREATE SKELENTA MOVIE LIST UI
     */
    const movieListUI = document.createElement("section");
    movieListUI.classList.add("movie-list", "genre-list");
    movieListUI.innerHTML = `
        <!--movie list title-->
        <div class="title-wrapper">
            <h2 class="heading">All ${categoryName} Movies</h2>
        </div>
        <!--movie list grid-->
        <div class="grid-list"></div>
        <!--movie list load more button-->
        ${currentPage<Number(total_pages) ? `<button class="btn load-more" load-more>Load More</button>` : ""  }
        
    `


    /**
     * COMPLETE MOVIE LIST UI: INSERT EACH MOVIE CARD UI
     */
    for (const movie of movieList){
        const movieCardUI = createMovieCardUI(movie);
        movieListUI.querySelector(".grid-list").appendChild(movieCardUI);
    }


    /**
     * COMPLETE MOVIE LIST UI: INSERT LOAD MORE FUNCTIONALITY
     */
    const loadMoreButton = movieListUI.querySelector("[load-more]");
    if (loadMoreButton) {
        loadMoreButton.addEventListener("click", function(){

            // add the loading icon
            loadMoreButton.classList.add("loading");

            // fetch movie list for new page
            currentPage++;
            fetchDataFromServer(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc&${urlParam}`, function({results: movieList}){

                // remove the loading icon
                loadMoreButton.classList.remove("loading");
                for (const movie of movieList){
                    const movieCardUI = createMovieCardUI(movie);
                    movieListUI.querySelector(".grid-list").appendChild(movieCardUI);
                }
            })
            if (currentPage >= total_pages) loadMoreButton.style.display = "none";
        })
    }


    /**
     * COMPLETE MOVIE LIST UI: ADD TO DOM
     */
    document.querySelector("[page-content]").appendChild(movieListUI);



})
















/****************************************************
 * ADD THE SEARCH MODAL UI TO THE MOVIE LIST PAGE
 ****************************************************/
createSeachModalUI();
