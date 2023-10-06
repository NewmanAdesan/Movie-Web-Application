# Movie-Database-Web-Application
start-date: 8/23/2023

<p align="center">
<img src="./readme_assets/Front-End-Project-banner.png">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML-E34F26.svg?style=flat-square&logo=html5&logoColor=white" alt="HTML badge" style="height: 25px;">
  <img src="https://img.shields.io/badge/CSS-1572B6.svg?style=flat-square&logo=css3&logoColor=white" alt="CSS badge" style="height: 25px;">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=javascript&logoColor=black" alt="JS badge" style="height: 25px;">
  <img src="https://img.shields.io/badge/API-007acc.svg?style=flat-square&logo=api&logoColor=white" alt="API badge" style="height: 25px;">
  <img src="https://img.shields.io/badge/Local_Storage-008080.svg?style=flat-square&logo=localstorage&logoColor=white" alt="Local Storage badge" style="height: 25px;">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat-square&logo=react&logoColor=white" alt="React badge" style="height: 25px;">
  <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript badge" style="height: 25px;">
  <img src="https://img.shields.io/badge/Next.js-000000.svg?style=flat-square&logo=next.js&logoColor=white" alt="Next.js badge" style="height: 25px;">
  <img src="https://img.shields.io/badge/API-007acc.svg?style=flat-square&logo=api&logoColor=white" alt="API badge" style="height: 25px;">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS badge" style="height: 25px;">
</p>

Project ScreenShots


Project Overview - the entirety of this project can be broken down into four major facts
    THE PAGES (3)
        - home page
        - movie detail page
        - movie list page

    THE USER INTERFACES
        - Header UI
        - Sidebar UI
        - Movie Banner UI
        - Movie Slide UI
        - Movie Detail UI
        - Movie List UI
        - Search Modal UI

    THE API ENDPOINTS
        - TMDB Movie List Request
        - TMDB Popular Movies Request
        - TMDB Upcoming Movies Request
        - TMDB Weekly Trending Movies Request
        - TMDB Movie Detail Request
        - TMDB Movie Recommendation Request
        - TMDB Genre Based Movie Request
        - TMDB Language Based Movie Request

    THE FUNCTIONALITIES
        - Searching Functionality
        - Load More Functionality
        - Pages Communication
        - Dynamic Rendering





Project Pages:

<img src="./assets/images/UI-Block/The-Home-Page (Mobile)-1x.png" style="width: 100%; max-width: 700px; height: auto" alt="Preview of the Home Page (Mobile View)">

<img src="./assets/images/UI-Block/The-Home-Page (desktop)-1x.png" style="width: 100%; max-width: 700px; height: auto" alt="Preview of the Home Page (Desktop View)">





Project UI Design:

Header UI
<img src="./assets/images/UI-Block/Header UI.png" style="width: 100%; max-width: 700px; height: auto">

Movie List UI
<img src="./assets/images/UI-Block/Movie List UI.png" style="width: 100%; max-width: 700px; height: auto">

Movie Banner UI
<img src="./assets/images/UI-Block/Movies Banner UI.png" style="width: 100%; max-width: 700px; height: auto">

Movie Slide UI
<img src="./assets/images/UI-Block/Movie Slide UI.png" style="width: 100%; max-width: 700px; height: auto">

Movie Detail UI
<img src="./assets/images/UI-Block/Movie Detail UI.png" style="width: 100%; max-width: 700px; height: auto">

Search Modal UI
<img src="./assets/images/UI-Block/Search Modal UI.png" style="width: 100%; max-width: 700px; height: auto">





Project API ENDPOINT (TMDB):

TMDB CONFIGURATION REQUEST
```
https://api.themoviedb.org/3/configuration?api_key={API_KEY}
```
The data returned here in the configuration endpoint is designed to provide some of the required information you'll need as you integrate our API.

| Field Name              | Description                                                                                    | Example Values                                      |
|-------------------------|------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| images                  | Object containing image-related information                                                     | See below                                           |
| images.base_url         | Base URL for retrieving images                                                                 | http://image.tmdb.org/t/p/                          |
| images.secure_base_url  | Secure base URL for retrieving images                                                          | https://image.tmdb.org/t/p/                         |
| images.backdrop_sizes   | List of available backdrop image sizes                                                         | ["w300", "w780", "w1280", "original"]              |
| images.logo_sizes       | List of available logo image sizes                                                             | ["w45", "w92", "w154", "w185", "w300", "w500", "original"] |
| images.poster_sizes     | List of available poster image sizes                                                           | ["w92", "w154", "w185", "w342", "w500", "w780", "original"] |
| images.profile_sizes    | List of available profile image sizes                                                          | ["w45", "w185", "h632", "original"]                |
| images.still_sizes      | List of available still image sizes                                                            | ["w92", "w185", "w300", "original"]                |
| change_keys             | List of keys used for tracking changes in the API responses                                     | See below                                           |
| change_keys.[key]       | Descriptions of keys used for tracking changes                                                  | See below                                           |

Example of `images` object:
```json
{
  "base_url": "http://image.tmdb.org/t/p/",
  "secure_base_url": "https://image.tmdb.org/t/p/",
  "backdrop_sizes": ["w300", "w780", "w1280", "original"],
  "logo_sizes": ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
  "poster_sizes": ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
  "profile_sizes": ["w45", "w185", "h632", "original"],
  "still_sizes": ["w92", "w185", "w300", "original"]
}
```

<br><br>

TMDB MOVIE LIST REQUEST
```
https://api.themoviedb.org/3/{MOVIE-CATEGORY}?api_key={API-KEY}&page=1
```
This URL is the endpoint for accessing the TMDB (The Movie Database) API. 
It allows you to make requests to retrieve information about movies based on various categories, 
such as popular movies, top-rated movies, weekly trending movies, and upcoming movies. 

| Field             | Description                                                                                    | Data Type   | Sample Data                                    |
|-------------------|------------------------------------------------------------------------------------------------|-------------|------------------------------------------------|
| page              | The current page of movie results                                                              | Number      | 1                                              |
| results           | An array of movie entries                                                                      | Array       | - (see below for movie entry structure)         |
| total_pages       | The total number of pages of movie results                                                      | Number      | 40369                                          |
| total_results     | The total number of movie results                                                              | Number      | 807368                                         |

Each movie entry in the `results` array has the following structure:

| Field             | Description                                                                                    | Data Type   | Sample Data                                    |
|-------------------|------------------------------------------------------------------------------------------------|-------------|------------------------------------------------|
| adult             | Indicates if the movie is for adults only                                                       | Boolean     | false                                          |
| backdrop_path     | URL to the backdrop image of the movie                                                           | String      | "/xFYpUmB01nswPgbzi8EOCT1ZYFu.jpg"           |
| genre_ids         | An array of genre IDs associated with the movie                                                  | Array       | [12, 28, 18]                                  |
| id                | Unique identifier for the movie                                                                 | Number      | 980489                                         |
| original_language | The original language of the movie                                                               | String      | "en"                                           |
| original_title    | The original title of the movie                                                                  | String      | "Gran Turismo"                                |
| overview          | A brief overview or synopsis of the movie                                                        | String      | "The ultimate wish-fulfillment tale..."     |
| popularity        | Popularity score of the movie                                                                    | Number      | 2933.587                                      |
| poster_path       | URL to the poster image of the movie                                                             | String      | "/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg"           |
| release_date      | The release date of the movie                                                                    | String      | "2023-08-09"                                  |
| title             | The title of the movie                                                                          | String      | "Gran Turismo"                                |
| video             | Indicates if there is a video available for the movie                                            | Boolean     | false                                          |
| vote_average      | Average vote rating for the movie                                                               | Number      | 8                                              |
| vote_count        | The total number of votes for the movie                                                          | Number      | 806                                            |

<br><br>



TMDB Movie Detail Request
```
https://api.themoviedb.org/3/movie/{MOVIE-ID}?api_key={API-KEY}&append_to_response=casts,videos,releases
```
This URL is used to retrieve detailed information about a specific movie by specifying its unique {MOVIE-ID}. 
it utilizes the append_to_response parameter to include additional data about the movie, 
such as its casts, videos, and releases, providing comprehensive information about the movie in a single API request.

| Key                   | Type                                                      | Description                                             |
|-----------------------|-----------------------------------------------------------|---------------------------------------------------------|
| belongs_to_collection | string                                       | Collection to which the movie belongs (optional)       |
| budget                | number                                       | Budget of the movie (optional)                         |
| genres                | Array<{ id: number, name: string }>          | List of genres associated with the movie (optional)    |
| homepage              | string                                       | Homepage URL of the movie (optional)                   |
| imdb_id               | string                                       | IMDb ID of the movie (optional)                        |
| production_companies  | object[]                                     | List of production companies (optional)                |
| production_countries  | object[]                                     | List of production countries (optional)                |
| revenue               | number                                       | Revenue generated by the movie (optional)              |
| spoken_languages      | object[]                                     | List of spoken languages in the movie (optional)       |
| status                | string                                       | Status of the movie (optional)                         |
| tagline               | string                                       | Tagline or slogan of the movie (optional)              |
| certification         | string                                       | Certification or rating of the movie                   |
| starring              | string                                       | List of starring cast members                          |
| directors             | string                                       | List of directors of the movie                         |
| runtime               | number                                       | Duration of the movie in minutes                       |
| videos                | { results: Array<{ name: string, key: string, site: string, type: string, id: string }> } | Object containing an array of MovieVideoInfo (optional) |
| casts                 | { cast: Array<{ name: string }>, crew: Array<{ name: string, department: string }> } | Object containing arrays of Cast and Crew             |
| releases              | { countries: Array<{ certification: string, release_date: string }> } | Object containing release information (optional)       |

<br><br>



TMDB SEARCH MOVIE REQUEST
```
https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${SEARCH_TEXT}
```
This URL retrives a list of movies whose name corresponde to the text in the query parameter

<br><br>



TMDB DISCOVER MOVIE REQUEST (BY LANGUAGE & BY GENRE)
```
DISCOVER MOVIES BY LANGUAGE
https://api.themoviedb.org/3/discover/movie?api_key={API_KEY}&with_genres=28


DISCOVER MOVIES BY GENRE
https://api.themoviedb.org/3/discover/movie?api_key={API_KEY}&with_original_language=ko
```
This URL retrives a list of movies that corresponde to a certain category. 
via the `with_original_language={LANGUAGE-INITIAL}` we specify a category based on a language.
via the URL `https://api.themoviedb.org/3/configuration/languages?api_key={API_KEY}` we can obtain languages supported by TMDB & their initials.

via the `with_genres={GENRE-ID}` we specify a category based on a genre.
via the URL `https://api.themoviedb.org/3/genre/movie/list?api_key={API_KEY}` we can obtain genres supported by TMDB & their initials.



<br><br>

TMDB MOVIE RECOMMENDATION REQUEST
```
https://api.themoviedb.org/3/movie/{MOVIE-ID}/recommendations?api_key={{API_KEY}}
```
This URL retrives a list of recommended movies based on a particular movie.


