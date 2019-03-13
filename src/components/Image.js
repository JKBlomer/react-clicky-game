import React from "react";



function Image(props) {
    
    return(
        <div className = "images">
            <img style={sectionStyle.img} 
            src={props.source} 
            key={props.id}
            id={props.id}
            alt="pic"
            onClick={props.click}
            className = {props.isImage ? "item shake" : "item"}
            />
        </div>
    );
}


const sectionStyle={
    back:{
        background: "#6956af",
        height:"900px",
        width:"1100px",
        marginLeft:"300px",
        display:"inline"
    },
    sec:{
        
        },
    img:{
        height:"180px",
        width:"180px",
        borderRadius:"3px",
        cursor:"pointer",
        // boxShadow: "0 5px 8px black",
        border: "5px solid #f1f1f1",
        backgroundSize: "cover",
        margin:"8px 25px"
    },
    inner:{
        background: "white",
        width:"100%",
        minHeight:"100%",
        marginTop: "10px",
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        paddingTop:"50px",
        paddingBottom:"50px",  
    },
   
    }


export default Image;