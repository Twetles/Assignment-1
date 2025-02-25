/**
 * @name: Assignment 1 - JavaScript
 * @Course Code: SODV1201
 * @class: Software Development Diploma program
 * @author: Tyler Le
 * @description: This Javascript file shows the staff sortings via name or salary.
 */

// Array of staff objects, each containing name, role, location, and salary
const staffData = [
    { name: "Brielle Williamson", role: "Integration Specialist", location: "New York", salary: 372000 },
    { name: "Herrod Chandler", role: "Sales Assistant", location: "San Francisco", salary: 137500 },
    { name: "Rhona Davidson", role: "Integration Specialist", location: "Tokyo", salary: 327900 },
    { name: "Colleen Hurst", role: "Javascript Developer", location: "San Francisco", salary: 205500 },
    { name: "Sonya Frost", role: "Software Engineer", location: "Edinburgh", salary: 103600 },
    { name: "Jena Gaines", role: "Office Manager", location: "London", salary: 90560 },
    { name: "Quinn Flynn", role: "Support Lead", location: "Edinburgh", salary: 342000 },
    { name: "Tiger Nixon", role: "System Architect", location: "Edinburgh", salary: 320800 },
    { name: "Garrett Winters", role: "Accountant", location: "Tokyo", salary: 170750 },
    { name: "Angelica Ramos", role: "Chief Executive Officer (CEO)", location: "London", salary: 1200000 }
];

//It retrieves the "staff-list" element and appends each staff member's details as a list item.
function displayStaff() {
    let list = document.getElementById("staff-list");
    list.innerHTML = "";
    staffData.forEach(staff => {
        let li = document.createElement("li");
        li.textContent = `${staff.name} - ${staff.role} - ${staff.location} - $${staff.salary.toLocaleString()}`;
        list.appendChild(li);
    });
}

// Loop through each staff member and create a list item with their details
function sortStaff(criterion) {
    staffData.sort((a, b) => {
        if (criterion === "name") {
            return a.name.localeCompare(b.name);
        } else if (criterion === "salary") {
            return b.salary - a.salary;
        } else if (criterion === "role") {
            return a.role.localeCompare(b.role);
        } else if (criterion === "location") {
            return a.location.localeCompare(b.location);
        }
    });
    displayStaff();
}

// Event listener to ensure staff data is displayed once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", displayStaff);
