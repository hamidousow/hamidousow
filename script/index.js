(function () {
    getProjects()
})()

/**
 * set navigation opacity when scrolling the page from the top, 
 * by adding the class "active" to the nav classlist
 */
let navigation = document.getElementById("nav-desktop");

let setNavOpacity = () => {
    if(window.scrollY >= 50) {
        return navigation.classList.add("active");
    } else {
        navigation.classList.remove("active");
    }
}

window.addEventListener('scroll', setNavOpacity); 

/**
 * open/close aside menu on mobile devices 
 */
const navLink = document.querySelectorAll('.navigation__menu__link');
const menu = document.getElementById("navigation__menu");

let toggleMenu = () => {
    menu.classList.toggle("navigation__menu-active");
}

document.getElementById("btnBurger").addEventListener('click', toggleMenu);

/**
 * when the mobile menu is open, event click on a link close it
 */
let nav__link = document.querySelectorAll(".navigation__menu__link");

for(let link of nav__link){
    link.addEventListener('click', () => {     
        menu.classList.remove('navigation__menu-active');
    });
};

/**
 * switch mode
 */
document.getElementById("btnSwitchMode").addEventListener("click", () => {        
    document
        .getElementById("site")
        .classList.toggle("dark-mode");
}) 

/** 
 * fetch data 
*/

async function getProjects() {
    const response = await fetch("../data/projectData.json");
    const results = await response.json()
    results.map(result => initProjectCards(result.id, result.title, result.subtitle, result.link, result.imageSource, result.imageAlt))
    // initProjectCards()
}

/** 
 * mapping cards data project
 */

// let card = document.querySelector(".card"); 
function initProjectCards (id, title, subtitle, link, imageSource, imageAlt) { 
    return document.getElementById('container-cards-projects').innerHTML += (
        `<div class="card" data-component="card" id=${id}>
            <a href=${link} class="blockLink" target="_blank" rel="noopener noreferrer">
                <div class="card__header">
                    <img class="card__img" src=${imageSource} alt=${imageAlt}/>
                </div>
                <div class="card__body">
                    <div class="card__project__description">
                        <h3 class="card__title">${title}</h3>
                        <h4 class="card__subtitle">${subtitle}</h4>
                    </div>
                </div>
            </a>
        </div>` )     
}  







