document.addEventListener('DOMContentLoaded', () => {
    let boxes = document.querySelectorAll(".box");
    let button = document.querySelector(".button");
    let CONTAINERGame = document.querySelector(".CONTAINER-GAME");

    let count = 3;
    let selectedBox;

    // Function to reset the game
    function resetGame() {
        boxes.forEach(box => {
            box.innerHTML = "";
            box.classList.remove("boxSelect");
            box.style.transform = "";
            box.style.backgroundColor = "";
            box.addEventListener("click", handleBoxClick);
        });
        count = 3;
        document.querySelector(".chance").textContent = `You Have ${count} Chances`;
        document.querySelector(".chancesCount").textContent = `Chance: ${count}`;
        selectRandomBox();
        document.querySelector(".popUpMessage").style.display = "none";
        CONTAINERGame.style.filter = "none";
    }

    // Function to select a random box
    function selectRandomBox() {
        let randomIndex = Math.floor(Math.random() * boxes.length);
        selectedBox = boxes[randomIndex];
       
    }

    // Function to display the message
    function displayMessage() {
        document.querySelector(".popUpMessage").style.display = "block";
        document.querySelector(".status").textContent = "You Lose!";
        boxes.forEach(box => box.removeEventListener("click", handleBoxClick));
        CONTAINERGame.style.filter = "blur(20px)";
    }

    // Function to handle box click
    function handleBoxClick(e) {
        if (count > 0) {
            count--;
            if (e.target !== selectedBox) {
                e.target.innerHTML = "❌";
                e.target.removeEventListener("click", handleBoxClick);
            } else {
                e.target.innerHTML = "✔️";
                e.target.style.transform = "rotateY(360deg)";
                e.target.style.backgroundColor = "red";
                setTimeout(() => {
                    document.querySelector(".popUpMessage").style.display = "block";
                    document.querySelector(".status").textContent = "You Win!";
                    boxes.forEach(box => box.removeEventListener("click", handleBoxClick));
                    CONTAINERGame.style.filter = "blur(20px)";
                }, 1000);
            }
            document.querySelector(".chance").textContent = `You Have ${count} Chances`;
            document.querySelector(".chancesCount").textContent = `Chance: ${count}`;
        } else {
            // Delay the display of the lose message
            setTimeout(displayMessage, 1000);
        }
    }

    // Attach click event listeners to boxes
    boxes.forEach(box => {
        box.addEventListener("click", handleBoxClick);
    });

    // Reset game on button click
    button.addEventListener("click", resetGame);

    // Initial setup
    selectRandomBox();
});
