// submit.js

document.addEventListener("DOMContentLoaded", function () {
  // Get the form element
  var form = document.querySelector("form");

  // Add event listener for form submission
  form.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the email input value
    var emailInput = document.querySelector(".subscribe-email").value;

    // Check if the email is valid (using HTML5 built-in validation)
    if (form.checkValidity()) {
      // If valid, you can perform additional actions here
      alert("Subscription successful!");
    } else {
      // If not valid, you can display an error message or handle it as needed
      alert("Please enter a valid email address.");
    }
  });
});
