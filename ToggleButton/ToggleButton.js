
let input=document.querySelector("#checkBox")
let label=document.querySelector("Label")
input.addEventListener("click",()=>{
 label.classList.toggle("TranslateClass");
 

 if(input.checked)
         
 // 
 
{
 console.log(input.checked)
 document.body.style.backgroundColor = "black";
 label.style.backgroundColor="white"

}
 else
{
 console.log(input.checked)
 document.body.style.backgroundColor = "white";

}
})
