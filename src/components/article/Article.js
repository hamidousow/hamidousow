import React, {Component} from 'react';

class Article extends Component {
    render() {        
        const {newData} = this.props;
        return (           
            <div className="exp-block">
                <h3 className="bold expTitle text gradient-title">{newData.titre}</h3>
                <p className="periode text gradient-title">{newData.periode}</p>
                <p className="lieu text italic light">{newData.lieu}</p>
                <p className="description text">{newData.description}</p>
            </div> 
        )             
    }    
};

export default Article;