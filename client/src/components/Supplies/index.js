import React from 'react';
import { Link } from 'react-router-dom';
import Jug from "../Photos/hario-cold-brew-jug.png";


const ssclass = `supplies-section-container wrapper`;

function Supplies(){
    return (

    <>
       <div id="supplies-section" className="desktop">
       <div className={ssclass}> 
            <div className="supplies-section-picture">
                <img src={Jug} alt="Hario Cold Brew Jug"></img>
            </div>
            <div className="supplies-section-text">
                
                <h2 className="wrapper">Our Supplies</h2>
                <p className="wrapper">We have a selection of World Class brands <br></br>that will help you make the best cup of coffee <br></br> of all style and types</p>
                <Link id="supplies-section-button" className="buttons-index" to="/shop">
                    View Selection
                </Link>
            </div>
        </div>
            
        </div>    

        <div id="supplies-section" className="responsive">
       <div className={ssclass}> 
            <div className="supplies-section-text"> 
                <h2 className="wrapper">Our Supplies</h2>
                <p className="wrapper">We have a selection of World Class brands <br></br>that will help you make the best cup of coffee <br></br> of all style and types</p>
                <div className="supplies-section-picture">
                <img src={Jug} alt="Hario Cold Brew Jug"></img>
                </div>
                <Link id="supplies-section-button" className="buttons-index" to="/shop">
                    View Selection
                </Link>
            </div>
        </div>
            
        </div>   

    </>      
    )
}

export default Supplies;