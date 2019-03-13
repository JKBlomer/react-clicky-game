import React from "react";


function Header(props){
    return (
        <nav className="Header" style={navStyle}>
        <ul style={headerStyle}>
        <li>
        <a style={{color: "white"}}href="/">
            <h1 style={headerItemsStyle.all}>CLICKY GAME</h1>
        </a>
        </li>
       <li>
       <h1 style={headerItemsStyle.h1}>{props.header} </h1>
       </li>
        <li>
        <h1 style={headerItemsStyle.h1}> Score: {props.clicks} | Top Score: {props.score}</h1>
        </li>
        </ul>
        
        </nav>
    );
}

const navStyle = {
    position:"fixed",
    width:"100%",
    zIndex:"3"
    
}
const headerStyle={
    background: "#5133a4",
    color: "#fff",
    display: "flex",
    position:"relative",
    boxShadow: "0 14px 28px #202020"
}

const headerItemsStyle={
    all:{
        marginLeft:"40px",
        flex:"1",
        padding: "40px",
        fontSize:"1rem"
    },
    h1:{
        flex:"1",
        paddingLeft: "300px",
        paddingTop: "40px",
        fontSize:"30px",
    }
}
export default Header;