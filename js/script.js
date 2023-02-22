//toogle class active
const navbarNav = document.querySelector('.navbar-nav');

//ketika hamburger menu d klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//klik d luar sidebar utk hilang nav hamburger menu
const hamburger = document.querySelector('#hamburger-menu');
//ngasih event
document.addEventListener('click', function(e) {

    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
})
