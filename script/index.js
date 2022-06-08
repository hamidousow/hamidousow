let navigation = document.getElementById("nav-desktop");
let btnBurger = document.getElementById("btnBurger");
let menuMobile = document.getElementById("menuMobile");
let linkNav = document.querySelectorAll("#menuMobile .linkNav");

let setNavOpacity = () => {
    if(window.scrollY >= 50) {
        navigation.classList.add("active");
    } else {
        navigation.classList.remove("active");
    }
}

window.addEventListener('scroll', setNavOpacity);

let toggleMenu = () => {
    menuMobile.classList.toggle("active");
}

btnBurger.addEventListener('click', toggleMenu);


for(let link of linkNav){
    link.addEventListener('click', () => {     
        toggleMenu();
    });
};

/* ********** MAPPING ******** */ 
let outilMainContainer = document.getElementById("outils-main-container");

/*const loadData = async () =>  {

    try {  
        const experienceData = "../data/experienceData.json";
        const formationData = "../data/formationData.json";

        const results = await Promise.all([
            fetch(experienceData), 
            fetch(formationData)
        ])
        
        //convertir chaque reponse de results[]
        const dataPromises = results.map( result => result.json());
        const finalData = await Promise.all(dataPromises);
        console.log(finalData.length)        
    } catch (err) {
        console.error(err);
    }    
}

loadData();*/


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
        let outil = document.createElement("div");    
        outilMainContainer.append(outil);
        outil.setAttribute('class', "iconContainer");

        let outilImg = document.createElement('img');
        outil.append(outilImg);
        outilImg.setAttribute('class', "outilImage");
        outilImg.src = item[i].src;
        outilImg.alt = item[i].alt;
    }       
}

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

        year.setAttribute('class', "periode text gradient-title");
        year.innerHTML = item[i].year; 
        
        month.setAttribute('class', "periode text");
        month.innerHTML = item[i].month; 

        title.setAttribute('class', "bold expTitle text gradient-title");
        title.innerHTML = item[i].title;  

        subtitle.setAttribute('class', "lieu text italic light");
        subtitle.innerHTML = item[i].subtitle; 
        
        taskDescription.setAttribute('class', "description text");
        taskDescription.innerHTML = item[i].taskDescription;                                      
    }      
}



