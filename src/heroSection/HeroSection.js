import React, { Component } from 'react';
import CallToAction from '../callToAction/CallToAction';

class HeroSection extends Component { 

    render () {
        const {heroContent} = this.props;
        return (
            <>            
            <header id={heroContent.section.id} className={heroContent.section.className}>
                <div className={heroContent.content.className}>          
                    <div className={heroContent.leftContent.className}>
                        <h1 className={heroContent.section.title.className}>
                            <span className="gradient-title"> Hello. </span>
                            <br/>{heroContent.section.title.text}</h1> 
                        <p className={heroContent.section.paragraphe.className}>{heroContent.section.paragraphe.text}</p>          
                    </div>
                    <div className={heroContent.rightContent.className}>
                        <img src={heroContent.section.img.src} className={heroContent.section.img.className}/>
                    </div>
                </div>
                <CallToAction/> 
            </header>
            </>
        )
    }    
};

export default HeroSection;