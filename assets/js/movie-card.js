"use strict";


import { imageBaseURL } from "./api.js";


/**
 * This vuction create a complete movie card UI from the data passed into it
 * @param {Object} movie 
 */
export const createMovieCardUI = function(movie) {
    const {
        title,
        release_date,
        poster_path,
        vote_average,
        id
    } = movie;

    const movieCardUI = document.createElement("div");
    movieCardUI.classList.add("movie-card");
    movieCardUI.innerHTML = `

        <!--movie card image-->
        <figure class="card-banner poster-box">
            <img src="${imageBaseURL}w342${poster_path}" alt="${title}" class="img-cover" loading="lazy">
        </figure>

        <!--movie card title-->
        <h3 class="title">${title}</h3>

        <!--movie card rating/year-->
        <div class="meta-list">
            <div class="meta-item">
                <img src="./assets/images/star.png" alt="rating" width="20" height="20">
                <span class="span">${vote_average.toFixed(1)}</span>
            </div>
            <div class="card-badge">${release_date.split("-")[0]}</div>
        </div>

        <!--movie card detail link-->
        <a href="./detail.html" class="card-btn" onclick="getMovieDetail(${id})"></a>
    `

    return movieCardUI;


}



