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
