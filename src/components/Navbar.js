import React from 'react'
import {AiFillGithub} from "react-icons/ai";
import {Link} from "react-router-dom";
export default function Navbar() {
    return (
        <div  style = {style}>
           
            <AiFillGithub style={{fontSize: "100px"}}/>
            <Link to="/"> <h1 style={headerDesign}> Home </h1></Link>
        </div>
    )
}

const style = {
    backgroundColor: "#3CAEA3",
    padding : "10px",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between"
}
const headerDesign = {
    color:"black",
    textDecoration:"none"
    
}
