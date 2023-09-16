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
 * ADD THE MOVIE BANNER UI TO THE HOME PAGE (SIX TASKS)
 * 1. fetch movie banner UI data: genres list data
 * 2. fetch movie banner UI data: popular movies data
 * 3. create a skelenta movie banner UI
 * 4. complete movie banner UI: insert each banner slide UI
 * 5. complete movie banner UI: insert each banner slide controllers UI
 * 6. complete movie banner UI: implement sliding effect
 **********************************************************************/


/**
 * FETCH GENRES LIST DATA
 * convert the genre list data structure
 * from { {id:"123", name:"Action"}, {id:"456", name:"Animation"}}
 * to {"123":"Action", "456":"Animation"}
 * 
 * also adding an added functionality called "asString"
 * the function recieves a list of genreId & returns the genreName as string
 * ["123", "456"] --> "Action, Animation"
 */
const genreList = {

    asString (genreIDList) {
        let newGenresList = [];
        for (const genreID of genreIDList){
            this[genreID] && newGenresList.push(this[genreID]);
            // this === genreList
        }
        return newGenresList.join(", ");
    }
}

const movieListFull = [];

fetchDataFromServer(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`, function({genres}){
    for (const {id, name} of genres) {
        genreList[id] = name;
    }

    /**
     * FETCH POPULAR MOVIES DATA
     */
    fetchDataFromServer(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=1`, function({results: movieList}){
        for (const movie of movieList){
            movieListFull.push(movie);
        }

        fetchDataFromServer(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=2`, function({results: movieList}){
            for (const movie of movieList){
                movieListFull.push(movie);
            }

            /**
                 * CREATE SKELENTA MOVIE BANNER UI
                 */
                const movieBannerUI = document.createElement("section");
                movieBannerUI.classList.add("banner");
                movieBannerUI.ariaLabel = "popular movies";
                movieBannerUI.innerHTML = `
                    <!--movie slides-->
                    <div class="slides"></div>

                    <!--movie slides controller-->
                    <div class="slides-controller">
                        <div class="slides-controller-inner"></div>
                    </div>
                `;

                let controlIndex = 0;
                for (const [index, movie] of movieListFull.entries()) {
                    const {
                        backdrop_path,
                        title,
                        release_date,
                        genre_ids,
                        overview,
                        poster_path,
                        vote_average,
                        id
                    } = movie;


                    /**
                     * COMPLETE MOVIE BANNER UI: INSERT BANNER SLIDES
                     */
                    const movieSlideUI = document.createElement("div");
                    movieSlideUI.classList.add("slide-item");
                    if (index==0) movieSlideUI.classList.add("active");
                    movieSlideUI.setAttribute("slide-item", "");
                    movieSlideUI.innerHTML = `
                        <img src="${imageBaseURL}w1280${backdrop_path}" alt="${title}" class="img-cover" loading="${index==0 ? "eager" : "lazy"}">
                        <div class="banner-content">
                            <h2 class="heading">
                                ${title}
                            </h2>
                            <div class="meta-list">
                                <div class="meta-item">${release_date.split("-")[0]}</div>
                                <div class="meta-item card-badge">${vote_average.toFixed(1)}</div>
                            </div>
                            <p class="genre">${genreList.asString(genre_ids)}</p>
                            <p class="banner-text">${overview}</p>
                            <a href="./detail.html" class="btn" onclick="getMovieDetail(${id})">
                                <img src="./assets/images/play_circle.png" alt="play circle" width="24" height="24" aria-hidden="true">
                                <span>Watch Now</span>
                            </a>
                        </div>
                    `;
                    movieBannerUI.querySelector(".slides").appendChild(movieSlideUI);



                    /**
                     * COMPLETE MOVIE BANNER UI: INSERT BANNER SLIDE CONTROLLERS
                     */
                    const movieSlideControllerUI = document.createElement("button");
                    movieSlideControllerUI.classList.add("slide-item", "poster-box");
                    if (index==0) movieSlideControllerUI.classList.add("active");
                    movieSlideControllerUI.setAttribute("slide-to-control", `${controlIndex}`);
                    controlIndex++;
                    movieSlideControllerUI.innerHTML = `
                        <img src="${imageBaseURL}w154${poster_path}" alt="Slide to ${title}" class="img-cover" loading="lazy" draggable="false">
                    `
                    movieBannerUI.querySelector(".slides-controller-inner").appendChild(movieSlideControllerUI);

                }



                /**
                * COMPLETE MOVIE BANNER UI: IMPLEMENT SLIDING EFFECT
                */
                const allMovieSlide = movieBannerUI.querySelectorAll("[slide-item]");
                const allMovieSlideController = movieBannerUI.querySelectorAll("[slide-to-control]");

                let lastActiveSlide = allMovieSlide[0];
                let lastActiveSlideController = allMovieSlideController[0];

                let currentActiveSlide, currentActiveSlideController;

                addEventOnElements(allMovieSlideController, "click", function(){
                    lastActiveSlide.classList.remove("active");
                    lastActiveSlideController.classList.remove("active");

                    currentActiveSlide = allMovieSlide[Number(this.getAttribute("slide-to-control"))];
                    currentActiveSlideController = this;

                    currentActiveSlide.classList.add("active");
                    currentActiveSlideController.classList.add("active");

                    lastActiveSlide = currentActiveSlide;
                    lastActiveSlideController = currentActiveSlideController;
                });



                /**
                * COMPLETE MOVIE BANNER UI: ADD UI TO DOM
                */
                document.querySelector("[page-content]").appendChild(movieBannerUI);  
                
                
                // add movie slide ui for the upcoming, weekly trending & top rated movies section
                addMovieSlideUIToHomePage();



         }); 
    });
});





/***********************************************************************
 * ADD ALL MOVIE SLIDE UI TO THE HOME PAGE (THREE MOVIE SLIDE UI) (THREE TASKS)
 * 
 * (THREE TASK)
 * 1. fetch movie slide UI data: movies data
 * 2. create a skelenta movie slide UI
 * 3. complete movie banner UI: insert each movie card UI
 * 
 * (THREE MOVIE SLIDE UI)
 * 1. Upcoming movies MOVIE SLIDE
 * 2. Weekly Trending movies MOVIE SLIDE
 * 3. Top Rated movies MOVIE SLIDE
 **********************************************************************/
const addMovieSlideUIToHomePage = function() {

    const homePageSections = [
        {
            title: "Upcoming Movies",
            path: "/movie/upcoming"
        },
        {
            title: "Weekly Trending Movies",
            path: "/trending/movie/week"
        },
        {
            title: "Top Rated Movies",
            path: "/movie/top_rated"
        }
    ]
    
    /**
     * FETCH MOVIE SLIDE UI DATA
     */
    for (const {title, path} of homePageSections) {
        fetchDataFromServer(`https://api.themoviedb.org/3${path}?api_key=${api_key}`, function({results: movieList}, title){
    
            /**
             * CREATE SKELENTA MOVIE SLIDE UI
             */
            const movieSlideUI = document.createElement("section");
            movieSlideUI.classList.add("movie-list");
            movieSlideUI.ariaLabel = `${title.toLowerCase()}`;
            movieSlideUI.innerHTML = `
            <!--movie list title-->
            <div class="title-wrapper">
                <h2 class="title-large">${title}</h2>
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
    
    
    
        }, title)
    }
    
}
















/****************************************************
 * ADD THE SEARCH MODAL UI TO THE HOME PAGE
 ****************************************************/
createSeachModalUI();

