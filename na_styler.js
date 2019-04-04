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

      var figBox = document.createElement("figure");
      figBox.setAttribute("id", "styleThumbs");
      document.getElementById("box").appendChild(figBox);

      for (var i = 0; i <= 4; i++) {
            var sheetImg = document.createElement("img");
            sheetImg.setAttribute("src", "na_small_" + i + ".png");
            sheetIag.setAttribute("alt", "na_style_" + i + ".css");
            sheetImg.onclick = function () {

            }
            figBox.appendChild(sheetImg);
      }
      var thumbStyles = document.createElement("style");
      document.head.appendChild(thumbStyles);
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            figure# styleThum
      )
}


function randInt(size) {
      return Math.floor(size * Math.random());
}