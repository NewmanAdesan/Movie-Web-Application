"use strict"

import { api_key, fetchDataFromServer, imageBaseURL } from "./api.js";
import { createMovieCardUI } from "./movie-card.js";
import { createSeachModalUI } from "./search.js";
import {createSideBarUI} from "./sidebar.js"



/***********************************************************************
 * Add the sidebar to the home page
 ***********************************************************************/
createSideBarUI();












/***********************************************************************
 * ADD THE MOVIE DETAIL UI TO THE DETAIL PAGE (SIX TASKS)
 * 1. obtain the parameters: movie id parameter
 * 2. fetch movie detail UI data: movie data
 * 3. dynamically title the page based on movie name.
 * 4. create a skelenta movie detail UI
 * 5. complete movie detail UI: insert video card UI
 * 6. complete movie detail UI: add to DOM
 **********************************************************************/

/**
 * OBTAIN THE PARAMETER
 * to fetch information about a movie, we need the id of the movie.
 * the click that redirected to this movies page 
 * must have already placed the id of movie clicked on the local storage.
 */

const movieId = window.localStorage.getItem("movieID");


/**
 * FETCH MOVIE DETAIL DATA
 */
fetchDataFromServer(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&append_to_response=casts,videos,releases`, function(movie){
    const {
        backdrop_path,
        poster_path,
        title,
        release_date,
        runtime,
        vote_average,
        releases: {countries: [{certification}]},
        genres,
        overview,
        casts: {cast, crew},
        videos: {results: videos}
    } = movie;


    /**
     * CHANGE PAGE TITLE BASED ON MOVIE TITLE
     */
    document.title = `${title} - Tvflix`;


    /**
     * CREATE A SKELENTAL MOVIE DETAIL UI
     */
    const movieDetailUI = document.createElement("section");
    movieDetailUI.classList.add("movie-detail");
    movieDetailUI.innerHTML = `
                    <!--movie backdrop-->
                    <div class="backdrop-image" style="background-image: url('${imageBaseURL}${"w1280"  ||  "original"}${backdrop_path || poster_path}');"></div>

                    <!--movie poster-->
                    <figure class="poster-box movie-poster">
                        <img src="${imageBaseURL}w1280${backdrop_path}" alt="${title}" class="img-cover">
                    </figure>

                    <!--movie detail box-->
                    <div class="detail-box">

                        <!--detail text content-->
                        <div class="detail-content">
                            <!--heading-->
                            <h1 class="heading">${title}</h1>
                            <!--meta list: rating,minute,year,parental-control-->
                            <div class="meta-list">
                                <!--rating-->
                                <div class="meta-item">
                                    <img src="./assets/images/star.png" alt="rating" width="20" height="20">
                                    <span class="span">${vote_average.toFixed(1)}</span>
                                </div>
                                <div class="separator"></div>
                                <!--minutes-->
                                <div class="meta-item">${runtime}m</div>
                                <div class="separator"></div>
                                <!--year-->
                                <div class="meta-item">${release_date.split("-")[0]}</div>
                                <div class="separator"></div>
                                <!--parental guide-->
                                <div class="meta-item card-badge">${certification}</div>
                            </div>
                            <!--genres-->
                            <p class="genre">${getGenres(genres)}</p>
                            <!--description-->
                            <p class="overview">${overview}</p>
                            <!--casts list and directors list-->
                            <div class="detail-list">
                                <!--casts-->
                                <div class="list-item">
                                    <p class="list-name">Starring</p>
                                    <p>${getCasts(cast)}</p>
                                </div>
                                <!--directors-->
                                <div class="list-item">
                                    <p class="list-name">Directed By</p>
                                    <p>${getDirectors(crew)}</p>
                                </div>
                            </div>
                        </div>

                        <!--detail trailer & clips title-->
                        <div class="title-wrapper">
                            <h3 class="title-large">Trailers and Clips</h3>
                        </div>

                        <!--detail trailer & clips video-->
                        <div class="slides-container">
                            <div class="slides-inner-container"></div>
                        </div>     
                    </div>
    
    `


    /**
     * COMPLETE MOVIE DETAIL UI: INSERT EACH YOUTUBE IFRAME
     */
    for (const {type, site, key, name} of videos){
        if ( (type === "Teaser" || type === "Trailer") && site === "YouTube" ){
            const videoCardUI = document.createElement("div");
            videoCardUI.classList.add("video-card")
            videoCardUI.innerHTML = `
                <iframe width="500" 
                        height="294"
                        src="https://www.youtube.com/embed/${key}?theme=dark&rel=1"
                        frameborder="0"
                        allowfullscreen="1"
                        title="${name}"
                        class="img-cover"
                        loading="lazy"
                ></iframe>
            `
            movieDetailUI.querySelector(".slides-inner-container").appendChild(videoCardUI);
        }
    }
    

    /**
     * COMPLETE MOVIE DETAIL UI: ADD TO DOM
     */
    document.querySelector("[page-content]").appendChild(movieDetailUI);

    
    // add recommendation movie slide to detail page
    addRecommendationMovieSlide();


    // remove fetching icon from the page
    document.querySelector("main").classList.remove("fetching");
})


/**
 * Convert the genre list data structure
 * from [ {id:"123", name:"Action"}, {id:"456", name:"Animation"} ]
 * to "Action, Animation"
 * 
 * @param {Array} genreList 
 * @returns {String} - return genre names
 */
const getGenres = function(genreList) {
    let newGenresList = [];
    for(const {name} of genreList) newGenresList.push(name);
    return newGenresList.join(", ");
}

/**
 * Convert the cast list data structure 
 * into a String structure only including 10 cast names
 * "Matthew McConaughey, Anne Hathaway, ..."
 * 
 * @param {Array} castList 
 * @returns {String} - return 10 cast names
 */
const getCasts = function(castList){
    let newCastList = [];
    for (let i=0, len=castList.length; i<len && i<10; i++) {
        newCastList.push(castList[i].name);
    }
    return newCastList.join(", ");
}


/**
 * Converts the crew list data structure 
 * to a String structure only including directors names
 * 
 * @param {Array} crewList 
 * @returns {String} - return 10 directors
 */
const getDirectors = function(crewList) {
    let directorsList = [];
    for (const {job, name} of crewList) {
        if (job == "Director") directorsList.push(name); 
    }
    return directorsList.join(", ");
}










/***********************************************************************
 * ADD THE MOVIE SLIDE UI TO THE DETAIL PAGE (RECOMMENDATION SLIDE)(SIX TASKS)
 * 1. obtain the parameters: movie id parameter
 * 2. fetch movie slide UI data: recommendation movie data
 * 3. create a skelenta movie detail UI
 * 6. complete movie slide UI: add to DOM
 * 
 **********************************************************************/
 const addRecommendationMovieSlide = function() {
    /**
     * FETCH MOVIE SLIDE UI DATA
     */
    fetchDataFromServer(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${api_key}`, function({results: movieList}){
    
            /**
             * CREATE SKELENTA MOVIE SLIDE UI
             */
            const movieSlideUI = document.createElement("section");
            movieSlideUI.classList.add("movie-list");
            movieSlideUI.innerHTML = `
            <!--movie list title-->
            <div class="title-wrapper">
                <h2 class="title-large">You May Also Like</h2>
            </div>
        
            <!--movie list slides-->
            <div class="slides-container">
                <div class="slides-inner-container"></div>
            </div>
            `;
            
    
            /**
             * COMPLETE MOVIE SLIDE UI: insert each movie card ui
             */
            for (const movie of movieList) {
                const movieCardUI = createMovieCardUI(movie);
                movieSlideUI.querySelector(".slides-inner-container").appendChild(movieCardUI);
            }
            
    
            /**
             * COMPLETE MOVIE SLIDE UI: insert into DOM
             */
            document.querySelector("[page-content]").appendChild(movieSlideUI);
    
        })

 }
















 /****************************************************
  * ADD THE SEARCH MODAL UI TO THE DETAIL PAGE
  ****************************************************/
 createSeachModalUI();