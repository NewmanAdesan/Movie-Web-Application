"use strict"



import {api_key, imageBaseURL, fetchDataFromServer} from "./api.js"





  


/**
 * this function has three tasks
 * 1. fetch sidebar UI data
 * 2. create a skeleta sidebar UI
 * 3. complete sidebar UI: insert data
 * 4. complete sidebar UI: implement toggle functionality
 */
const navBar = document.querySelector("[sidebar]")
export const createSideBarUI = function () {

    /*
     * FETCH SIDEBAR UI DATA
     */
    fetchDataFromServer(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`, function({genres}){

        /*
        * CREATE SKELENTA SIDEBAR UI
        */
        const sidebarUI = document.createElement("div");
        sidebarUI.classList.add("sidebar-inner");
        sidebarUI.innerHTML = `
            <!--- sidebar-list (genre) --->
            <div class="sidebar-list">
                <p class="title">Genre</p>
            </div>


            <!--- sidebar-list (language) --->
            <div class="sidebar-list">
                <p class="title">Language</p>
                <a href="./movie-list.html" class="sidebar-link" menu-close onclick='getMovieList("with_original_language=en", "English")'>English</a>
                <a href="./movie-list.html" class="sidebar-link" menu-close onclick='getMovieList("with_original_language=hi", "Hindi")'>Hindi</a>
                <a href="./movie-list.html" class="sidebar-link" menu-close onclick='getMovieList("with_original_language=bn", "Bengali")'>Bengali</a>
            </div>


            <!--- sidebar-footer -->
            <div class="sidebar-footer">
                <p class="copyright">
                    Copyright 2023 
                    <a href="https://youtube.com/@codewithsadee">tutored by codewithsadee</a>
                    <a href="https://github.com/newmanadesan">built by newmanadesan</a>
                </p>
                <img src="./assets/images/tmdb-logo.svg" alt="the movie database logo" width="130" height="17">
            </div>
        `
        navBar.appendChild(sidebarUI);


        /*
        * COMPLETE SIDEBAR UI: INSERT DATA
        */
        for (const {id:genreId, name:genreName} of genres){
            const sidebarLinkUI = document.createElement("a");
            sidebarLinkUI.classList.add("sidebar-link");
            sidebarLinkUI.setAttribute("href", "./movie-list.html");
            sidebarLinkUI.setAttribute("menu-close", "");
            sidebarLinkUI.setAttribute("onclick", `getMovieList("with_genres=${genreId}", "${genreName}")`)
            sidebarLinkUI.textContent = genreName;
            sidebarUI.querySelectorAll(".sidebar-list")[0].appendChild(sidebarLinkUI);
        }


        /*
        * COMPLETE SIDEBAR UI: INSERT TOGGLE FUNCTIONALITY
        */
       insertToggleFunctionality();
    })
}



const insertToggleFunctionality = function () {
    // get the menu togglers
    const menuTogglers = document.querySelectorAll("[menu-toggler]");

    // get the menu closers
    const menuClosers = document.querySelectorAll("[menu-close]");

    // get the menu button
    const menuBtn = document.querySelector("[menu-btn]");

    // get the ovelay element
    const overlay = document.querySelector("[overlay]");

    // when the menu togglers are clicked;
    // the menu-btn changes
    // an ovelay appears
    // the sidebar UI appears
    addEventOnElements(menuTogglers, "click", function(){
        menuBtn.classList.toggle("active");
        overlay.classList.toggle("active");
        navBar.classList.toggle("active");
    });

    // when the menu closers are clicked the sidebar UI disapears
    // the menu-btn changes
    // an ovelay disappears
    // the sidebar UI disappears
    addEventOnElements(menuClosers, "click", function(){
        menuBtn.classList.remove("active");
        overlay.classList.remove("active");
        navBar.classList.remove("active");
    });
}