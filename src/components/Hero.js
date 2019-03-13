import React from "react";



const heroStyles = {
    hero: {
        paddingTop:"200px",
        height:"300px",
        background: "#2c323c",
        color: "white",
        
        textAlign:"center",
        fontSize:"2rem"
    }
}


function Hero() {
    return(
        <div>
        <div style={heroStyles.hero} className="Hero">
            <div className="hero-text">
                <h1 >Clicky Game!</h1><br/>
                <p>Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        </div>
        </div>
    );
}   



export default Hero;