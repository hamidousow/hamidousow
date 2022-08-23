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

let outilsData = fetch("../data/outilsData.json")
    .then(response => {
        return response.json();
    })
    .then(data =>                        
        createOutil(data)                                              
    );

let experienceData = fetch("../data/experienceData.json")
    .then(response => {
        return response.json();
        
    })
    .then(data =>                        
        createExperienceArticle(data)                                         
    );

let formation = fetch("../data/formationData.json")
    .then(response => {
        return response.json();        
    })
    .then(data =>                        
        formationNewData = createFormationArticle(data)                                                
    );

/* FUNCTIONS */

let article = document.querySelector(".exp__article");

let createExperienceArticle = (item) => {
    let newArticle;
    for(let i = 0; i < item.length; i++) {         
        newArticle = article.cloneNode(true);
        article.setAttribute("id", item[i].id);
        document.querySelector(".article__year").innerHTML = item[i].year;    
        document.querySelector(".article__month").innerHTML = item[i].month;      
        document.querySelector(".article__title").innerHTML = item[i].title;
        document.querySelector(".article__subtitle").innerHTML = item[i].subtitle;
        document.querySelector(".article__description").innerHTML = item[i].taskDescription;        
        article.after(newArticle);
    }    
}

let formationArticle = document.querySelector(".formation__article");
let createFormationArticle = (item) => {
    let newFormationArticle;
    for(let i = 0; i < item.length; i++) {         
        newFormationArticle = formationArticle.cloneNode(true);
        formationArticle.setAttribute("id", item[i].id);
        document.querySelector(".formation__article__year").innerHTML = item[i].year;    
        document.querySelector(".formation__article__month").innerHTML = item[i].month;      
        document.querySelector(".formation__article__title").innerHTML = item[i].title;
        document.querySelector(".formation__article__subtitle").innerHTML = item[i].subtitle;
        formationArticle.after(newFormationArticle);
    }    
}

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
        document.querySelector(".blockLink").href = item[i].content.link;        
    }
    
    card.after(newCard)    
}

let createOutil = (item) => {

    for(let i = 0; i < item.length; i++) {
        let outilImg = document.createElement('img');
        document.getElementById("outils-main-container").append(outilImg);
        outilImg.setAttribute('class', "logo_tech");
        outilImg.src = item[i].src;
        outilImg.alt = item[i].alt;
    }       
}





