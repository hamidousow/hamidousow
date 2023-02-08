const card  = () => { 

    getProjects();

    async function getProjects() {
        const response = await fetch("../data/projectData.json");
        const results = await response.json()
        results.map(result => initCard(result.id, result.title, result.subtitle, result.link, result.imageSource, result.imageAlt))
    }    

    let initCard = (id, title, subtitle, link, imageSource, imageAlt) => {

        return document.getElementById('container-cards-projects').innerHTML += (
            `<div class="card" data-component="card" id=${id}>
                <div class="card__header">
                    <a href=${link} target="_blank" rel="noopener noreferrer" class="card__number">${id}</a>
                    <a href=${link} target="_blank" rel="noopener noreferrer">
                        <h3 class="card__title">${title}</h3>
                        <h4 class="card__subtitle">${subtitle}</h4>
                    </a>
                </div>  
                <a href=${link} target="_blank" rel="noopener noreferrer">
                    <div class="card__body">
                        <span class="card__cta card__cta-position card__cta-style button">découvrir le projet</span>         
                        <img class="card__img" src=${imageSource} alt=${imageAlt}/>
                    </div> 
                </a>            
            </div>` )

    }         
}  

export default card;