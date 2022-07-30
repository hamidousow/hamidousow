/**
 * switch mode
 */
// let btnSwitchMode = document.querySelectorAll("input[name=switchMode]");
let btnSwitchMode = document.getElementById("btnSwitchMode");
let btnActiveDarkMode = document.querySelector("#dark-mode");
let btnActiveDefaultMode = document.querySelector("#light-mode");
let body = document.getElementsByTagName("body");


    btnSwitchMode.addEventListener("click", () => {        
        document.getElementById("site").classList.toggle("dark-mode");
    }) 



/** 
 * fetch the json file into 
 */
let card = document.querySelector(".card");
let card__img = document.querySelector(".card__img");
let cardTitle = document.querySelector(".card__title");
let card__subtitle = document.querySelector(".card__subtitle");
let projectLink = document.querySelector(".blockLink");

let cardData = fetch("../data/projectData.json")
    .then(response => {
        return response.json()
    })
    .then(data => createNewNode(data))

    /**
     * 
     * @param {*} item correspond to the object passing 
     */
let createNewNode = (item) => {
    let newCard;

    for(let i = 0; i < item.length; i++) {        
        newCard = card.cloneNode(true);       
        cardTitle.innerHTML = item[i].content.title.text;
        card__subtitle.innerHTML = item[i].content.subtitle.text;
        card__img.src = item[i].content.background.source;
        projectLink.href = item[i].content.link;        
    }
    
    card.after(newCard)    
}

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

let btnBurger = document.getElementById("btnBurger");
let menuMobile = document.getElementById("menuMobile");
let nav__link = document.querySelectorAll("#menuMobile .nav__link");

let toggleMenu = () => {
    menuMobile.classList.toggle("active");
}

btnBurger.addEventListener('click', toggleMenu);

/**
 * when the mobile menu is open, event click on a link close it
 */
for(let link of nav__link){
    link.addEventListener('click', () => {     
        toggleMenu();
    });
};

/**
 * outils section fetching
 */ 

let outilMainContainer = document.getElementById("outils-main-container");

let outilsData = fetch("../data/outilsData.json")
                    .then(response => {
                        return response.json();
                    })
                    .then(data =>                        
                        createOutil(data)                                              
                    );

let experience = fetch("../data/experienceData.json")
                    .then(response => {
                        return response.json();
                    })
                    .then(data => 
                        createArticle(data, tabOfContainer[0]))

let formation = fetch("../data/formationData.json")
                        .then(response => {
                            return response.json();
                        })
                        .then(data => 
                            createArticle(data, tabOfContainer[1]))

let createOutil = (item) => {

    for(let i = 0; i < item.length; i++) {
        let outilImg = document.createElement('img');
        outilMainContainer.append(outilImg);
        outilImg.setAttribute('class', "logo_tech");
        outilImg.src = item[i].src;
        outilImg.alt = item[i].alt;
    }       
}


/**
 * formation and exp fetching
 */

let formationMainContainer =  document.getElementById("formationContainer");
let experienceMainContainer = document.getElementById("experienceContainer");
const tabOfContainer = [experienceMainContainer, formationMainContainer];

let createArticle = (item, container) => {
    for(let i = 0; i < item.length; i++) {
        let article = document.createElement("article");    
        container.append(article);
        article.setAttribute('class', "articles__article");

        let period = document.createElement("div");    
        container.append(period);
        period.setAttribute('class', "period");

        let details = document.createElement("div");
        container.append(details);
        details.setAttribute('class', "details");

        let title  = document.createElement('h3');
        let subtitle = document.createElement('h4');
        let year = document.createElement('p');
        let month = document.createElement('p');
        
        let taskDescription = document.createElement('p');

        article.append(period,details);
        period.append(year, month);
        details.append(title, subtitle, taskDescription);

        year.setAttribute('class', "periode text");
        year.innerHTML = item[i].year; 
        
        month.setAttribute('class', "periode text");
        month.innerHTML = item[i].month; 

        title.setAttribute('class', "bold expTitle text");
        title.innerHTML = item[i].title;  

        subtitle.setAttribute('class', "lieu text italic");
        subtitle.innerHTML = item[i].subtitle; 
        
        taskDescription.setAttribute('class', "description text");
        taskDescription.innerHTML = item[i].taskDescription;                                      
    }      
}



