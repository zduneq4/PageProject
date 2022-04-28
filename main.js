const hamburgerBtn = document.querySelector('.hamburger-area');
const closeBtn = document.querySelector('.close-menu-area');
const navMobile = document.querySelector('.nav-mobile');

const showMenu = () => {
    navMobile.classList.add('show-menu')
    navMobile.classList.remove('hide-menu')

}

const closeMenu = () => {
    navMobile.classList.add('hide-menu')
    navMobile.classList.remove('show-menu')
}




hamburgerBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click', closeMenu);