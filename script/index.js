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
        article.setAttribute('class', "article-formation article");

        let title  = document.createElement('h3');
        let periode = document.createElement('p');
        let lieu = document.createElement('p');
        let description = document.createElement('p');

        article.append(title, periode, lieu, description);

        title.setAttribute('class', "bold expTitle text gradient-title");
        title.innerHTML = item[i].titre;  

        periode.setAttribute('class', "periode text gradient-title");
        periode.innerHTML = item[i].periode; 

        lieu.setAttribute('class', "lieu text italic light");
        lieu.innerHTML = item[i].lieu; 
        
        description.setAttribute('class', "description text");
        description.innerHTML = item[i].description;                 
    }      
}



