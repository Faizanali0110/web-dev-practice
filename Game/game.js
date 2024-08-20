
        let boxes = document.querySelectorAll(".box");
        let button = document.querySelector(".button");
        let CONTAINERGame = document.querySelector(".CONTAINER-GAME");
        
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
            selectRandomBox = Math.floor(Math.random() * boxes.length);
            selectedBox = boxes[selectRandomBox];
            selectedBox.classList.add("boxSelect");
            document.querySelector(".popUpMessage").style.display = "none";
            CONTAINERGame.style.filter = "none";
        }
        
        // Initial game setup
        let selectRandomBox = Math.floor(Math.random() * boxes.length);
        let selectedBox = boxes[selectRandomBox];
        selectedBox.classList.add("boxSelect");
        let count = 3;
        
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
                    }, 500);
                }
                document.querySelector(".chance").textContent = `You Have ${count} Chances`;
                document.querySelector(".chancesCount").textContent = `Chance: ${count}`;
            } else {
                document.querySelector(".popUpMessage").style.display = "block";
                document.querySelector(".status").textContent = "You Lose!";
                boxes.forEach(box => box.removeEventListener("click", handleBoxClick));
                CONTAINERGame.style.filter = "blur(20px)";
            }
        }

        // Attach click event listeners to boxes
        boxes.forEach(box => {
            box.addEventListener("click", handleBoxClick);
        });

        // Reset game on button click
        button.addEventListener("click", resetGame);
   