import React, {Component} from 'react';

class Article extends Component {
    render() {        
        const {cvData} = this.props;
        return (
            <div>
                <h3>{cvData.periode}</h3>
                <p>{cvData.titre}</p>
                <p>{cvData.lieu}</p>
                <p>{cvData.description}</p>
            </div> 
        )             
    }    
};

export default Article;