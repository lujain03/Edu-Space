let subMenu = document.getElementById("subMenu");
let userPic = document.querySelector('.user-pic');

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
    let isOpen = subMenu.classList.contains("open-menu");
    userPic.setAttribute('aria-expanded', isOpen);
};