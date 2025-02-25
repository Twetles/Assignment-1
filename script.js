/**
 * @name: Assignment 1 - JavaScript
 * @Course Code: SODV1201
 * @class: Software Development Diploma program
 * @author: Tyler Le
 * @description: JavaScript functions for different pages.
 */

document.addEventListener("DOMContentLoaded", function () {
    // Display image name after 10 seconds
    setTimeout(function () {
        document.getElementById("image-name").style.display = "block";
    }, 10000);

    // Display current year in footer
    document.getElementById("year").textContent = new Date().getFullYear();
});