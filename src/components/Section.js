import React from "react";


function Section({ children }){
    return(
        <div style={sectionStyle.back} className="Section">
            <section style={sectionStyle.inner}>
                <div className="pic-sec"style={sectionStyle.sec}>
                {children}
                </div>
            </section>
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
    
    inner:{
        background: "white",
        width:"100%",
        minHeight:"100%",
        marginTop: "10px",
        display:"flex",
        
        flexWrap:"wrap",
        justifyContent:"center",
        paddingTop:"50px",
        paddingBottom:"50px"
    }
    }


export default Section;