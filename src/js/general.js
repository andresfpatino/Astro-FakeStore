// Run Sticky Menu
window.onscroll = function() {
    stickyMenu()
};
const header = document.querySelector(".topBar");
const headerHight = document.querySelector('.topBar').clientHeight;
function stickyMenu() {
    if (window.pageYOffset >= headerHight) {
        header.classList.add("isSticky")
    } else {
        header.classList.remove("isSticky");
    }
}

// Toggle mobile menu
const toggle = document.querySelectorAll('.toggle-menu');    
toggle.forEach((button) => {
    const menu = document.querySelector('.header_navigation');
    button.addEventListener('click', () => {
    if (menu.style.display == "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
    });
});