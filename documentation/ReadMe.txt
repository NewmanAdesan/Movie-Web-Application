

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