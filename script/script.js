const menu = document.querySelector(".navbar_menu");
const navbar = document.querySelector(".navbar");
const bar = document.querySelector(".navbar_toggle");

const nav = () =>{
    menu.classList.toggle('active');
    navbar.classList.toggle('is_active');
    bar.classList.toggle('is_active_bar');
}

bar.addEventListener("click",nav);