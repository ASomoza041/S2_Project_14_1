"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Alex A. Somoza
   Date: 4-2-19  

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/
//Runs setStyles() when the page loads.
window.onload = setStyles;

//This function Will apply a new random style sheet everytime the page loads.
function setStyles() {
      var styleNum = randInt(5);
      var linkElem = document.createElement("link");
      linkElem.setAttribute("rel", "stylesheet");
      linkElem.setAttribute("id", "fancySheet");
      linkElem.setAttribute("href", "na_style_" + styleNum + ".css");
      document.head.appendChild(linkElem);
}


function randInt(size) {
      return Math.floor(size * Math.random());
}