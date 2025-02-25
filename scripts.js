/**
 * @name: Assignment 1 - JavaScript
 * @Course Code: SODV1201
 * @class: Software Development Diploma program
 * @author: Tyler Le
 * @description: This JavaScript file converts a numerical mark into a corresponding letter grade.
 */

function convertMark() {
    // Retrieve the input value from the text box with id "mark-input"
    let mark = document.getElementById("mark-input").value;
    
    // Get the element where the result will be displayed
    let result = document.getElementById("grade-result");

    try {
        // Convert the input value to an integer
        mark = parseInt(mark);

        // Validate if the input is a number and within the valid range (0-100)
        if (isNaN(mark) || mark < 0 || mark > 100) {
            throw "Invalid input! Enter a number between 0 and 100.";
        }

        // Determine the grade based on the mark using a ternary conditional operator
        let grade = mark >= 90 ? "A" :
                    mark >= 80 ? "B" :
                    mark >= 70 ? "C" :
                    mark >= 50 ? "D" : "F";

        // Display the calculated grade in the "grade-result" element
        result.textContent = `Your Grade: ${grade}`;
    } catch (error) {
        // Display error message if input is invalid
        result.textContent = error;
    }
}
