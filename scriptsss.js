/**
 * @name: Assignment 1 - Introduction to Web Programming
 * @Course Code: SODV1201
 * @Class: Software Development Diploma program
 * @Author: Tyler Le
 * @Date: 02/24/2025
 * @Description: JavaScript file for converting temperatures in the weather page.
 */

$(document).ready(function() {
    // Named function to convert Fahrenheit to Celsius
    function fahrenheitToCelsius(fahrenheit) {
        return ((fahrenheit - 32) * 5 / 9).toFixed(2);
    }

    // Anonymous function to convert Celsius to Kelvin
    let celsiusToKelvin = function(celsius) {
        return (parseFloat(celsius) + 273.15).toFixed(2);
    };

    // Event listener for Fahrenheit to Celsius
    $("#convertToCelsius").click(function() {
        let input = $("#temperature").val();
        if ($.isNumeric(input)) {
            let celsius = fahrenheitToCelsius(parseFloat(input));
            $("#result").text(input + "°F is " + celsius + "°C");
        } else {
            $("#result").text("Please enter a valid number.");
        }
    });

    // Event listener for Celsius to Kelvin
    $("#convertToKelvin").click(function() {
        let input = $("#temperature").val();
        if ($.isNumeric(input)) {
            let kelvin = celsiusToKelvin(parseFloat(input));
            $("#result").text(input + "°C is " + kelvin + "K");
        } else {
            $("#result").text("Please enter a valid number.");
        }
    });
});
