import React from 'react'
import {Link} from 'react-router-dom' 
export default function SingleUser({user={}}) {
    const {login,avatar_url,id,url} =user;
    return (
        <div style={container}>
       
            <img style ={{height:"110px", width:"110px",borderRadius:"50%"}} src={avatar_url} alt ="user"/>
            <h2 style={{fontSize:"15px"}}>{login}</h2>
            <Link to={login}>
            <button style={{backgroundColor:"#3CAEA3", padding:"10px",
             borderRadius:"18px",outline:"none", color:"white"}}>
             More Details</button></Link>
        
        </div>
        

        
    )
}

const container ={
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    flexBasis: "25%",
    border: "1px solid #20639B",
    margin:"10px 48px",
    padding: "20px 0px"
    }
