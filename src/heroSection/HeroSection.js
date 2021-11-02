import React, { Component } from 'react';

class HeroSection extends Component { 

    render () {
        const {heroContent} = this.props;
        return (
            <>            
            <header id={heroContent.section.id} className={heroContent.section.className}>
                <div className={heroContent.content.className}>          
                    <div className={heroContent.leftContent.className}>
                        <p className={heroContent.section.paragraphe.className}>{heroContent.section.paragraphe.text}</p>
                        <h1 className={heroContent.section.title.className}>{heroContent.section.title.text}</h1>           
                    </div>
                    <div className={heroContent.rightContent.className}>
                        <img src={heroContent.section.img.src} className={heroContent.section.img.className}/>
                    </div>
                </div> 
            </header>
            </>
        )
    }    
};

export default HeroSection;