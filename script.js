const menu = document.getElementById('drop-down');

const menuBtn = document.getElementById('pfp-div');



menuBtn.addEventListener('click', () => {
    toggleMenu();
})

function toggleMenu() {
    menu.classList.toggle('drop-down-active');
}