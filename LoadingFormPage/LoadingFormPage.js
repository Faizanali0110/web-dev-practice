document.addEventListener('DOMContentLoaded', () => {
    const listButtons = document.querySelectorAll('.button');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;

    function updateButtonStates() {
        listButtons.forEach((li, index) => {
            // Add the 'active' class to the current index and remove from others
            if (index <= currentIndex) {
                li.classList.add('active'); // Highlight the active item
            } else {
                li.classList.remove('active'); // Remove highlight from non-active items
            }
        });

        // Disable or enable buttons based on the current index
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === listButtons.length - 1;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateButtonStates();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < listButtons.length - 1) {
            currentIndex++;
            updateButtonStates();
        }
    });

    // Initialize button states on page load
    updateButtonStates();
});
