import React, { Component } from 'react';

class Section extends Component {
    render () {
        const {sectionContent} = this.props;        
        return (
            <>
                <section id={sectionContent.section.id} className={sectionContent.section.className}> 
                    <div className="wrapTitles">
                        <h1 className={sectionContent.section.title.className}>{sectionContent.section.title.text}</h1>
                        <span className="bigOutlineTitle outlines">{sectionContent.section.title.text}</span>
                    </div>
                    <div className={sectionContent.content.className}>          
                        <div className={sectionContent.leftContent.className}>
                            <p className={sectionContent.section.paragraphe.className}>{sectionContent.section.paragraphe.text}</p>           
                        </div>
                        <div className={sectionContent.rightContent.className}>
                            <img src={sectionContent.section.img.src} className={sectionContent.section.img.className}/>
                        </div>
                    </div> 
                </section>                
            </>
        )
    }   
};

export default Section;


