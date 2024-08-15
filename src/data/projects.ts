import pricingComponentScreenShot from '@/assets/images/pricing-component.jpg'
import sliderComponentScreenShot from '@/assets/images/slider-component.jpg'
import lhamidouPortfolio from '@/assets/images/lhamidou-portfolio.jpg'
import nisaaMockUp from '@/assets/images/nisaa-mockup-1.jpeg'
import type { Project } from '@/types/Project';

const projects: Array<Project> = [
       
    {
        id: 1,
        title: "Nisaa box",
        subtitle: "website",   
        description: "La Nisaa Box est un concept innovant qui allie promotion de produits bio de qualité et enrichissement spirituel. Le projet de redesign de leur site internet vise à atteindre plusieurs objectifs clés : - Développer une charte graphique qui reflète à la fois l’esthétique naturelle et l'engagement écologique de la marque. - Concevoir une interface utilisateur moderne et intuitive, offrant une navigation fluide et agréable, développée avec Vue.js pour une performance optimale. - Intégrer des animations fluides et engageantes à l'aide de GSAP (GreenSock Animation Platform) pour dynamiser l'expérience utilisateur. - Mettre en avant chaque box mensuelle en créant un espace dédié pour présenter en détail les articles qu'elle contient. - Adopter des bonnes pratiques en matière de performance web, notamment en utilisant des images au format WebP pour une optimisation du temps de chargement et de la qualité visuelle.",
        imageSource: nisaaMockUp,
        imageAlt: "nisaa box in a screen",
        link: "https://nisaabox.netlify.app",
        keywords: ["VueJs", "Gsap", "Netlify", "Figma"],
        isOnline: true
    },   
    {
        id: 2,
        title: "L'Hamidou",
        subtitle: "Site",   
        description: "À côté de ma carrière de développeur, je conçois des logos et des sites vitrines. Lhamidou est un portfolio que j'ai developpé pour presenter les projets emblématiques que j'ai réalisés en freelance.",     
        imageSource: lhamidouPortfolio,
        imageAlt: "projet slider bootcamp coding",
        link: "https://lhamidou.pages.dev",
        keywords: ["nuxt Js", "serverless", "full stack", "sql","supabase"],
        isOnline: false

    },
    {
        id: 3,
        title: "Bootcamp slider",
        subtitle: "Component",   
        description: "Le projet consiste en la création d'un slider responsive pour afficher les commentaires et témoignages des utilisateurs de manière attrayante et interactive. Ce composant clé a été conçu pour offrir une expérience utilisateur fluide, quel que soit l'appareil utilisé.",     
        imageSource: sliderComponentScreenShot,
        imageAlt: "projet slider bootcamp coding",
        link: "https://hamidousow.github.io/bootcamp-coding-slider/",
        keywords: ["javascript", "html", "css"],
        isOnline: false
    },
    {
        id: 4,
        title: "Pricing component",
        subtitle: "Component",
        description: "Le projet consiste en la création d'un composant interactif de type pricing, permettant aux utilisateurs de sélectionner un prix ou un plan tarifaire à l'aide d'un système de bouton glissant. Ce composant est conçu pour offrir une expérience utilisateur intuitive et moderne.",
        imageSource: pricingComponentScreenShot,
        imageAlt: "projet pricing component",        
        link: "https://hamidousow.github.io/interactive-pricing-component/",
        keywords: ["javascript", "html", "css"],
        isOnline: false
    }
];

export default projects;