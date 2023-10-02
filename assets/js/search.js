"use strict";

import { api_key, fetchDataFromServer } from "./api.js";
import { createMovieCardUI } from "./movie-card.js";


/***********************************************************************************************************************
 * CREATE A SEARCH MOCAL UI (THREE TASK)
 * 1. fetch search modal ui data under two conditions: firstly on search input change and secondly after 500ms timeout
 * 2. create a skelenta search modal ui
 * 3. complete the search modal ui: insert each movie card ui
 * 4. complete the search modal ui: add to DOM
 ***********************************************************************************************************************/

export const createSeachModalUI = function() {
    let timeout;
    const searchInput = document.querySelector("[search-field]");
    const searchBox = document.querySelector("[search-wrapper]");


    /**
     * FETCH DATA: FIRSTLY ON SEARCH INPUT CHANGE
     */
    searchInput.addEventListener("input", function(){
        // if search input was changed to have no value
        if (!searchInput.value.trim()){
            searchBox.classList.remove("searching");
            if (document.querySelector(".search-modal")) document.querySelector(".search-modal").classList.remove("active");
            clearTimeout(timeout);
        }

        // show loading icon
        searchBox.classList.add("searching");
        clearTimeout(timeout);


        /**
         * FETCH DATA: SECONDLY AFTER 500ms
         */

        timeout = setTimeout(fetchDataFromServer(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchInput.value.trim()}&include_adult=false&language=en-US&page=1`, function({results: movieList}){

            // remove loading icon
            searchBox.classList.remove("searching");

            /**
             * CREATE A SKELENTA SEARCH MODAL UI
             */
            const searchModalUI = document.createElement("div");
            searchModalUI.classList.add("search-modal", "active");
            searchModalUI.innerHTML = ` 
                <p class="label">Result For</p>
                <h1 class="heading">${searchInput.value.trim()}</h1>
                <div class="movie-list grid-list"></div>
            `

            /**
             * COMPLETE SEACH MODAL UI: INSERT EACH MOVIE CARD UI
             */
            for (const movie of movieList) {
                const movieCardUI = createMovieCardUI(movie);
                searchModalUI.querySelector(".grid-list").appendChild(movieCardUI);
            }


            /**
             * COMPLETE SEACH MODAL UI: ADD TO DOM
             */
            document.querySelector("main").appendChild(searchModalUI);
        }), 500)
        
    })
}
