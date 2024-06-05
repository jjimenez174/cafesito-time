import React from 'react';
import { Link } from 'react-router-dom';
import Jug from "../Photos/CafedeOllajug.png";


const ssclass = `supplies-section-container wrapper`;

function Supplies(){
    return (

    <>
       <div id="supplies-section" className="desktop">
       <div className={ssclass}> 
            <div className="supplies-section-picture">
                <img src={Jug} alt="Cafe De Olla Jug"></img>
            </div>
            <div className="supplies-section-text">
                
                <h2 className="wrapper">Our Supplies</h2>
                <p className="wrapper">We have a selection of exotic blends <br></br>that will give you the best coffee taste <br></br> of deep flavours.</p>
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
                <p className="wrapper">We have a selection of exotic blends <br></br>that will give you the best coffee taste <br></br> of deep flavours.</p>
                <div className="supplies-section-picture">
                <img src={Jug} alt="Cafe De Olla Jug"></img>
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