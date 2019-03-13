import React from "react";
import logo from '../logo.svg';


function Footer() {
    return(
        <footer className="Footer"style={footerStyles.foot}>Clicky Game!
            <img name="imgFooter" style={footerStyles.theLogo}src={logo} alt="jkb">
        
        </img></footer>
    );
}

const footerStyles= {
    foot:{
        background: "#5133a4",
        
        height: "60px",
        color: "#fff",
        marginTop:"100px",
        margin:"auto"
    },
    theLogo:{
        height: "30px",
        width:"30px",
        padding:"5px"
    }
   
}

export default Footer;