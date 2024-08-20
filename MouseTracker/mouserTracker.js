
    let buttonClick = document.querySelector("#buttonClick");
    buttonClick.addEventListener("mouseover", (e) => {
        let width = e.pageX;
        let height = e.pageY;
        console.log(width);
        console.log(height);
        dotFunction(width, height);
    });

    function dotFunction(width, height) {
        let clickClass = document.querySelector(".clickClass");
        clickClass.style.width = "10px"; // Set a fixed width for the dot
        clickClass.style.height = "10px";
        clickClass.style.transform =`translate(${width - 10}px, ${event.height - 10}px)`;
        clickClass.style.borderRadius = "50%"; // Make it a circle
        console.log(buttonClick.pageX)
    }
    console.log(buttonClick.pageX)