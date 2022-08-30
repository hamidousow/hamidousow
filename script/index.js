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


let toggleMenu = () => {
    document.getElementById("menuMobile").classList.toggle("active");
}

document.getElementById("btnBurger").addEventListener('click', toggleMenu);

/**
 * when the mobile menu is open, event click on a link close it
 */
let nav__link = document.querySelectorAll("#menuMobile .nav__link");

for(let link of nav__link){
    link.addEventListener('click', () => {     
        toggleMenu();
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

/** fetch local data */

let cardData = fetch("../data/projectData.json")
    .then(response => {
        return response.json()
    })
    .then(data => createNewNode(data))

/** 
 * clone card element for each iteration on the json file
 */

let card = document.querySelector(".card"); 
let createNewNode = (item) => {
    let newCard;

    for(let i = 0; i < item.length; i++) {        
        newCard = card.cloneNode(true);       
        document.querySelector(".card__title").innerHTML = item[i].content.title.text;
        document.querySelector(".card__subtitle").innerHTML = item[i].content.subtitle.text;
        document.querySelector(".card__img").src = item[i].content.background.source;
        document.querySelector(".card__img").alt = item[i].content.background.alt;
        document.querySelector(".blockLink").href = item[i].content.link;      
    }
    
    card.after(newCard)    
}







