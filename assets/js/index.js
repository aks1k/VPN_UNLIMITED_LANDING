"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
    setNavbarLink();

    window.addEventListener('hashchange', function () {
        setNavbarLink()
    })

});

function setNavbarLink() {
    let compareString = '#home';

    if (window.location.hash) {
        compareString = window.location.hash;
    }

    const navbar = document.getElementById('navbar-menu');
    const navbarItems =  navbar.querySelectorAll('li');

    navbarItems.forEach(item => {
        compareString=='#' + item.dataset.anchor ? item.classList.add('active-item') : item.classList.remove('active-item');
    });
}