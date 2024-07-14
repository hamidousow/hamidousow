import pricingImage from '@/assets/images/pricing-bg.jpg'
import youngCoding from '@/assets/images/young-coding.jpg'
import portfolioImage from '@/assets/images/portfolio-image.jpg'
import type { Project } from '@/types/Project';

const projects: Array<Project> = [
    {
        id: 1,
        title: "L'Hamidou",
        subtitle: "Site",   
        description: "En parrallèle de ma carrière de développeur, je conçois des logos et des sites vitrines. Ce projet a pour but d'exposer quelques travaux emblématique que j'ai réalisé.",     
        imageSource: portfolioImage,
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
        imageSource: youngCoding,
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
        imageSource: pricingImage,
        imageAlt: "projet pricing component",        
        link: "https://hamidousow.github.io/interactive-pricing-component/",
        keywords: ["javascript", "html", "css"],
        isOnline: false
    }
];

export default projects;