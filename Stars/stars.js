let stars = document.querySelectorAll(".stars");
stars.forEach((star, index) => {
    star.addEventListener("click", (e) => {
        // Loop through all stars and set their state based on the clicked star's index
        stars.forEach((s, i) => {
            if (i <= index) {
                s.classList.add("filled"); // Add a class to indicate the star is active
            } else {
                s.classList.remove("filled"); // Remove the class if the star is not active
            }
        });
    });
});


// Handle mouseover to show rating preview
stars.forEach((star, index) => {
    star.addEventListener("mouseover", (e) => {
        stars.forEach((s, i) => {
            if (i <= index) {
                s.classList.add("active"); // Add class to show preview rating
            } else {
                s.classList.remove("active"); // Remove class for stars not in preview
            }
        });
    });

    // Handle mouseout to reset the stars to their original state
    star.addEventListener("mouseout", () => {
        stars.forEach((s) => {
            s.classList.remove("active"); // Remove class to reset stars
        });
    });

    // Handle click to set the rating
    star.addEventListener("click", () => {
        stars.forEach((s, i) => {
            if (i <= index) {
                s.classList.add("selected"); // Add class to indicate the star is selected
            } else {
                s.classList.remove("selected"); // Remove class for unselected stars
            }
        });
    });
});
