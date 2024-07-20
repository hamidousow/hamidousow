import pricingComponentScreenShot from '@/assets/images/pricing-component.jpg'
import sliderComponentScreenShot from '@/assets/images/slider-component.jpg'
import lhamidouPortfolio from '@/assets/images/lhamidou-portfolio.jpg'
import type { Project } from '@/types/Project';

const projects: Array<Project> = [
    {
        id: 1,
        title: "L'Hamidou",
        subtitle: "Site",   
        description: "En parrallèle de ma carrière de développeur, je conçois des logos et des sites vitrines. Ce projet a pour but d'exposer quelques travaux emblématique que j'ai réalisé.",     
        imageSource: lhamidouPortfolio,
        imageAlt: "projet slider bootcamp coding",
        link: "https://lhamidou.pages.dev",
        keywords: ["nuxt Js", "serverless", "full stack", "sql","supabase"],
        isOnline: false

    },   
    {
        id: 2,
        title: "Bootcamp slider",
        subtitle: "Component",   
        description: '',     
        imageSource: sliderComponentScreenShot,
        imageAlt: "projet slider bootcamp coding",
        link: "https://hamidousow.github.io/bootcamp-coding-slider/",
        keywords: ["javascript", "html", "css"],
        isOnline: false
    },   
    {
        id: 3,
        title: "Pricing component",
        subtitle: "Component",
        description: '',
        imageSource: pricingComponentScreenShot,
        imageAlt: "projet pricing component",        
        link: "https://hamidousow.github.io/interactive-pricing-component/",
        keywords: ["javascript", "html", "css"],
        isOnline: false
    }
];

export default projects;