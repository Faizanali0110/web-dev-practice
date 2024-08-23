const boxes = document.querySelectorAll(".box");
let winner=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

let currentPlayer = "✔️";
let count=0
let WIN=currentPlayer
function updateBox() {
    
    
    if (this.textContent === "") {
        WIN=currentPlayer
        this.textContent = currentPlayer;
        count++;
        
    
        if(count>=3&&count<=9)
        {
            if(count==9)
                {
                    if(checkWinner())
                        {
                            
                            console.log(currentPlayer)

                            setTimeout(() => {
                                alert(`${WIN} wins!`);
                            }, 100);
                        }
                    else
                    {
                        setTimeout(() => {
                            alert(`Draw Match!`);
                        }, 100);  
                        
                        
                    }
                    restartMatch()
                }
            
            else{
                if(checkWinner())
                    {
                        setTimeout(() => {
                            alert(`${WIN} wins!`);
                            restartMatch()
                        }, 100);
                    }
                }     
                               
        }
       
        currentPlayer = currentPlayer === "✔️" ? "⭕" : "✔️";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", updateBox);
  
});
function checkWinner() {
    for (let win of winner) {
        let pattern1 = boxes[win[0]].textContent;
        let pattern2 = boxes[win[1]].textContent;
        let pattern3 = boxes[win[2]].textContent;

        if (pattern1 === "" || pattern2 === "" || pattern3 === "") {
            continue;  
        }

        if (pattern1 === pattern2 && pattern2 === pattern3) {
            return true;  
        }
    }

    return false;  
}
function restartMatch()
{
    count=0
    boxes.forEach((box)=>{
        box.textContent="";
    })
    currentPlayer = "✔️"; 
}