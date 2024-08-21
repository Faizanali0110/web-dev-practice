const menu = document.getElementById('menu');
const sidenav = document.getElementById('sidenav');
const cancel_button=document.querySelector(".cancel")

menu.addEventListener('click', () => {
    sidenav.style.display="block";
    sidenav.classList.add('sidenav-open');
});
cancel_button.addEventListener("click",()=>{
    sidenav.style.display="none";
})