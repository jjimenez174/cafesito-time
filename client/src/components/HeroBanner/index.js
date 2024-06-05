import React from 'react';
import Coffee from "../Media/frenchpress.gif";
import Video from "../Media/coffee.mp4";
// import Background from "../Media/background.png";
import HomePic from "../Photos/cafesito-2.png"


function HeroBanner(){
    return (
    <>
        <div className="desktop">
            <div className="hero">
                <div className="hero-left">
                    <h1 className="heading">
                        Coffee from Acros the Globe
                    </h1>
                    <p className="subtitle">
                        Immerse yourself <br></br>
                        The best of exotic coffees <br></br>at your fingertips.
                    </p>
                    <div className="line">
                        <p className="scroll-text">Scroll Down to Explore</p>
                    </div>
                </div>

                <div className="hero-picture">
                    <img src={HomePic} alt="Cafesito Time"></img>
                </div>
                <div className="hero-right">
                    <div className="video-bg">
                        {/* <img id="background" src={Coffee} alt="background"></img> */}
                        <video autoPlay loop muted>
                            <source src={Video} type="video/mp4">
                            </source>
                        </video>
                    </div>
                </div>

            </div>    
        </div>
        <div className="responsive">
            <div className="hero">
                <div className="hero-picture">
                    <h1 className="heading">
                        Coffee from Across the Globe
                    </h1>
                    <img src={HomePic} alt="Cafesito Time"></img>
                </div>

                <div className="hero-right">
                    <video className="video-bg" autoPlay loop muted>
                        <source src={Video} type="video/mp4">
                        </source>
                    </video>
                </div>

            </div>      
        </div>
    </>
    )
}

export default HeroBanner;