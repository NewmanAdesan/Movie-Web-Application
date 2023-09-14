

Implementation workflow

PAGE SETUP
    - add the primary meta tags (title & description)
    - add link to page favicon
    - add link to chosen google font
    - add link to external css file
    - add link to external script file

    - setup css variable for website colors, typography setting e.t.c

    <img src="./images/movie-web-application-------application-colors.png" />


PAGE RESET STYLING
    - reset margin, padding & box-sizing of all elements
    - reset the styles & decoration of li, a elements
    - reset the display of a, img, span, iframe, button elements to block
    - reset the font-color of a, input, button elements to inherit

    - reset the background, border of the input, button elements. set to none
    - reset the outline-color of the focus-visible state. set to red
    - set the font property of input, button element to inherit
    - set the width of input element to 100%
    - set a pointer cursor & left text alignment on the button element

    - set smooth scrolling for html elements
    - set the base typography on the body element 
      (font-family, font-size, font-color, background-color)

    - restyle the webkit-scrollbar & webkeit-scrollbar-thumb



  PAGE HEADER
    - the page header constitute of the "site-logo, search-icon, nav-toggle-button"
    - clicking the search icon displays a search-box UI the overlays the header.
    - the search-box UI consists of a search input element & a "close-button" to hide the search box.


    - clicking the nav-toggle-button hides & displays the page side bar.
    - the nav-toggle-button has two icons. but just one will be visible at a time. 
    - the icon that would be visible depends on if the page side-bar is hidden or display

    
    ####### BLOCK IMAGE OF THE HEADER #####

    ###### IMAGE SHOWING THE LOGIC OF THE NAV BUTTON #####


  PAGE SIDE-BAR
    - the sidebar UI consist of three items "genre movie list", "language movie list", "page footer"
    - the "genre movie list" contains items which are links to view movies associated with a genre
    - the "language movie list" contains items which are links to view movies associated with a language

  
  HOMEPAGE BANNER
    - 

















CONCEPTS

1. Restyling the ScrollBar
```css

::-webkit-scrollbar {
  width: 8px;   /* sets vertical scrollbar width */
  height: 8px;  /* sets horizontal scrollbar width */
}

::-webkit-scrollbar-thumb {
  background-color: var(--banner-background);
  border-radius: var(--radius-8);
}

```










2. search button interaction (opacity)
```html
<button class="search-btn" search-toggler menu-close>
    <img src="./assets/images/search.png" alt="open search box" width="24" height="24">
</button>
```

```css
.search-btn, .menu-btn {
  padding: 12px;
}

.search-btn {
  background-color: var(--banner-background);
  border-radius: var(--radius-8);
  opacity: 0.5;
  transition: var(--transition-short);
}

.search-btn:is(:hover, :focus-visible) {
  opacity: 1;
}
```










3. the search-field interaction
```html

<div class="search-wrapper" search-wrapper>
    <input type="text" placeholder="Search any movies..." autocomplete="off" aria-label="search movies" class="search-field" search-field>
    <img src="./assets/images/search.png" alt="search" width="24" height="24" class="leading-icon">     
</div>

```

```css
.search-field {
  height: 48px;
  outline: none;
  border-radius: var(--radius-8);
  background-color: var(--banner-background);
  padding-inline: 44px 16px;
  line-height: 48px;
  transition: var(--transition-short);
}

.search-field::placeholder {
  color: var(--on-surface-variant);
}

.search-field:hover {
  box-shadow: 0 0 0 2px var(--on-surface-variant);
}

.search-field:focus {
  box-shadow: 0 0 0 2px var(--on-surface);
  padding-inline-start: 12px;
}

.search-wrapper .leading-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12px;
  opacity: 0.5;
  transition: var(--transition-short);
}

.search-wrapper:focus-within .leading-icon {
  opacity: 0;
}
```










4. Menu Toggling icons
```html
<button class="menu-btn" menu-btn>
    <img src="./assets/images/menu.png" alt="open menu" width="24" height="24" class="menu">
    <img src="./assets/images/menu-close.png" alt="close menu" width="24" height="24" class="close">
</button>
```

```css
.menu-btn .menu,
.menu-btn.active .close {
  display: block;
}

.menu-btn .close,
.menu-btn.active .menu {
  display: none;
}
```










5. search bar loading icon
```css
.search-wrapper::before {
  content: "";
  position: absolute;
  top: 14px;
  right: 12px;

  display: none;
  width: 20px;
  height: 20px;

  border: 3px solid white;
  border-radius: var(--radius-24);
  border-inline-end-color: transparent;

  animation: loading 500ms linear infinite;
}

@keyframes loading {
  0%{
    transform: rotate(0);
  }

  100% {
    transform: rotate(1turn);
  }
}

.search-wrapper.searching::before {
  display: block;
}










6. overlay technique to focus on sidebar
```html
<body>
      <header> ... </header>
      <nav> ... </nav>
      <div class="overlay" overlay menu-toggler></div>
</body>
```

```css
.nav {
  ...
  z-index: 4;
  ...
}

.overlay{
  position: fixed;
  top: 96px;  /* make sure it does not cover the header */
  left: 0;
  bottom: 0;  /* gives an automatic height */
  z-index: 3;

  opacity: 0;  /* completely see-through */

  width: 100%;
  background-color: var(--background);

  pointer-events: none;     /* no pointer event */
  transition: var(--transition-short);
}

.overlay.active{
  opacity: 0.5;
  pointer-events: all;
}
```










4. blurry effect: dark bottom overlay technique

```css
.container{
  position: relative;
  ...
}

.container::after {
  content: "";

  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1;

  width: 100%;
  height: 150px;

  background-image: linear-gradient(180deg, hsla(250, 13%, 11%, 0), hsla(250, 13%, 11%, 1));
  pointer-events: none;
}
```










5. slides effect
```html
<div class="slides">
    <!--movie-slide-1-->
    <div class="slide-item" slide-item> ... </div>

    <!--movie-slide-2-->
    <div class="slide-item" slide-item> ... </div>

    <!--movie-slide-3-->
    <div class="slide-item" slide-item> ... </div>
</div>
```

```css

.slides .slide-item {
  position: absolute;
  top: 0;
  left: 120%;

  opacity: 0;
  visibility: hidden;

  width: 100%;
  height: 100%;

  background-color: var(--banner-background);
  transition: opacity var(--transition-long);
}

.slides .slide-item.active {
  left: 0;
  opacity: 1;
  visibility: visible;
}

```











6. dim effect: darkish overlay 

```html
.slides .slide-item::before {
  content: "";
  position: absolute;
  inset: 0;   /* automatically set width & height to 100% */
  background-image: linear-gradient(var(--banner-overlay));
}
```

```css
.slides .slide-item::before {
  content: "";
  position: absolute;
  inset: 0;   /* automatically set width & height to 100% */
  background-image: linear-gradient(var(--banner-overlay));
}
```











7. text clamping effect
```html

<h2 class="heading">
    Puss in Boots: The Last Wish
</h2>
<p class="banner-text">
  Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.
</p>
```


```css
.banner :is(.heading, .banner-text){
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
}

.banner .heading {
  margin-block-end: 16px;
  -webkit-line-clamp: 3;
}

.banner-text {
  margin-block-end: 24px;
  -webkit-line-clamp: 2;
}

```




8. Fallback Content for img & video element

```html

<button class="slide-item poster-box">
    <img src="./assets/images/slider-control.jpg" alt="Slide to Puss in Boots: The Last Wish" class="img-cover" loading="lazy" draggable="false">
</button>
```

```css
.poster-box {
  background-image: url("../images/poster-bg-icon.png");
  aspect-ratio: 2/3;
}

.poster-box,
.video-box {
  background-position: center;
  background-size: 50px;
  background-repeat: no-repeat;
  background-color: var(--banner-background);
  border-radius: var(--radius-16);
  overflow: hidden;
}
```










/* ================== THE MOVIE LIST UI =================== */
1. spacing before & after a flexbox
```html
<div class="slides-inner-container">

    <!--movie card 1-->
    <div class="movie-card">...</div>

    <!--movie card 2-->
    <div class="movie-card">...</div>

    ...
</div>
```

```css
.slides-inner-container{
  position: relative;
  display: flex;
  gap: 16px;
}


.slides-inner-container::before,
.slides-inner-container::after {
  content: "";
  min-width: 12px;
}
```





2. horizontal text clamp
```html
<h3 class="title">Puss in Boots: The Last Wish</h3>
```

```css

.title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-block: 8px 4px;
}

```





3. several elements position to the same link

```html
<div class="movie-card">
    <!--movie card image-->
    <figure>...</figure>

    <!--movie card title-->
    <h3>...</h3>

    <!--movie card rating/year-->
    <div>...</div>

    <!--movie card detail link-->
    <a href="./detail.html" class="card-btn"></a>
</div>
```


```css
.movie-card .card-btn {
  position: absolute;
  inset: 0;
}
```










/* ================== THE MOVIE DETAIL UI =================== */
1. Backdrop Image

```html
<div class="backdrop-image" style="background-image: url('./assets/images/slider-banner.jpg');"></div>
```


```css
.backdrop-image {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  width: 100%;
  height: 600px;

  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.backdrop-image::after {
  content: "";
  position:absolute;
  inset: 0;
  background-image: linear-gradient(hsla(250, 13%, 11%, 1), hsla(250, 13%, 11%, 0.9));
}

```









/* ================== OTHERS =================== */
1. fetching data

```javascript

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

```












