// Mobile Menu
var menuButton = document.getElementById("menu-button");
var navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("hidden");
});

// Project Filtering
var filterButtons = document.querySelectorAll(".filter-button");
var projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var selectedCategory = button.getAttribute("data-filter");

    projectCards.forEach(function (project) {
      var projectCategory = project.getAttribute("data-category");

      if (selectedCategory === "all") {
        project.classList.remove("hidden");
      } else if (selectedCategory === projectCategory) {
        project.classList.remove("hidden");
      } else {
        project.classList.add("hidden");
      }
    });
  });
});

// Contact Form Validation
var contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var subject = document.getElementById("subject");
  var message = document.getElementById("message");
  var successMessage = document.getElementById("success-message");
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var isValid = true;

  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("subject-error").textContent = "";
  document.getElementById("message-error").textContent = "";
  successMessage.textContent = "";

  if (name.value.trim() === "") {
    document.getElementById("name-error").textContent = "Name is required.";
    isValid = false;
  }

  if (email.value.trim() === "") {
    document.getElementById("email-error").textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    document.getElementById("email-error").textContent = "Enter a valid email.";
    isValid = false;
  }

  if (subject.value.trim() === "") {
    document.getElementById("subject-error").textContent = "Subject is required.";
    isValid = false;
  }

  if (message.value.trim() === "") {
    document.getElementById("message-error").textContent = "Message is required.";
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = "Message sent successfully!";
  }
});
