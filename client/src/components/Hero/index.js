import React from 'react';
// import Coffee from "../Media/frenchpress.gif";
import Video from "../Media/coffee.mp4";
// import Background from "../Media/background.png";
import HomePic from "../Photos/the-cold-drip1.png"
// import Background from "../Media/background.png";

function Hero(){
    return (
    <>
        <div className="desktop">
            <div className="hero">
                <div className="hero-left">
                    <h1 className="heading">
                        Essence of Coffee
                    </h1>
                    <p className="subtitle">
                        The celebration of deliciousness. <br></br>
                        The best of coffee industry brought <br></br>together in one space.
                    </p>
                    <div className="line">
                        <p className="scroll-text">Scroll Down to Discover</p>
                    </div>
                </div>

                <div className="hero-picture">
                    <img src={HomePic} alt="The Cold Drip"></img>
                </div>
                <div className="hero-right">
                    <div className="video-bg">
                        
                        <video autoPlay loop muted>
                            <source src={Video} type="video/mp4">
                            </source>
                        </video>
                    </div>
                    {/* <div className="picture-bg"> 
                        <img id="background" src={Background} alt="background"></img>
                    </div> */}
                </div>

            </div>    
        </div>
        <div className="responsive">
            <div className="hero">
                <div className="hero-picture">
                    <h1 className="heading">
                        Essence of Coffee
                    </h1>
                    <img src={HomePic} alt="The Cold Drip"></img>
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

export default Hero;