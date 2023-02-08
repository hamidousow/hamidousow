const navOpacity = () => {

    let navigation = document.getElementById("nav-desktop");

    let setNavOpacity = () => {
        if(window.scrollY >= 50) {
            return navigation.classList.add("active");
        } else {
            navigation.classList.remove("active");
        }
    }

    window.addEventListener('scroll', setNavOpacity);

}

const toggleMenu = () => {
    const menu = document.getElementById("navigation__menu");
    let toggleMenu = () => {
        menu.classList.toggle("navigation__menu-active");
    }

    document.getElementById("btnBurger").addEventListener('click', toggleMenu);
}

const navLinkCloseMenu = () => {
    const menu = document.getElementById("navigation__menu");
    let nav__link = document.querySelectorAll(".navigation__menu__link");

    for(let link of nav__link){
        link.addEventListener('click', () => {     
            menu.classList.remove('navigation__menu-active');
        });
    };
}

export {navOpacity, toggleMenu, navLinkCloseMenu};