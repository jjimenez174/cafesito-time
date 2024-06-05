import React from 'react';

const rsclass = `recommendation-section-container wrapper`;

function Recommendation(){
    return (
        <div id="recommendation-section">
        <div className={rsclass}> 
            <div className="recommendation-section-text">
                <h2>Recommendations</h2>
                <p id="recommedendation-tag">Discover how you can get started to Great Coffee</p>
            </div>
            <div className="recommendation-section-picture">
                <p>Some Promo Text</p>
                <button id="recommendation-section-button">View Selection</button>
            </div>
        </div>
            
        </div>       
    )
}

export default Recommendation;