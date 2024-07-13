import pricingImage from '@/assets/images/pricing-bg.jpg'
import youngCoding from '@/assets/images/young-coding.jpg'
import portfolioImage from '@/assets/images/portfolio-image.jpg'

const projects = [
    {
        id: 1,
        title: "L'Hamidou",
        subtitle: "Site",   
        description: "En parrallèle de ma carrière de développeur, je conçois des logos et des sites vitrines. Ce projet a pour but d'exposer quelques travaux emblématique que j'ai réalisé.",     
        imageSource: portfolioImage,
        imageAlt: "projet slider bootcamp coding",
        link: "https://lhamidou.pages.dev",
        keywords: ["Nuxt Js", "Serverless", "Full Stack", "SQL","Supabase"]
    },   
    {
        id: 2,
        title: "Bootcamp slider",
        subtitle: "Component",        
        imageSource: youngCoding,
        imageAlt: "projet slider bootcamp coding",
        link: "https://hamidousow.github.io/bootcamp-coding-slider/",
        keywords: ["Javascript", "Html", "Css"]
    },   
    {
        id: 3,
        title: "Pricing component",
        subtitle: "Component",
        imageSource: pricingImage,
        imageAlt: "projet pricing component",        
        link: "https://hamidousow.github.io/interactive-pricing-component/",
        keywords: ["Javascript", "Html", "Css"]
    }
];

export default projects;