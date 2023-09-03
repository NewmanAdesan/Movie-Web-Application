

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

    - reset the background, border of input, button elements
    - reset the outline-color of the focus-visible state
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



2. Menu Toggling icons



3. search bar loading icon


4. blur overlay technique