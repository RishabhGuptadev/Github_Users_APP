import React from 'react'
import { useParams } from 'react-router';
import {useGitHubContext} from "../GitHubContext/GitHubContext";
export default function UserInfo() {
    const {githubUsers} =useGitHubContext();
    console.log( githubUsers)
    const name =  useParams().login;
    
    console.log("this is the name of the clicked user",name)
    return (
        <div>
        {githubUsers.filter((userData)=>userData.login === name).map((user)=>{
            return (
                <div style={{display :"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", marginTop:"50px"}}>
                <img style={{borderRadius:"50%"}} src = {user.avatar_url} alt ="image"/>
                <h1>{user.login}</h1>
                </div>
                
            )
        })}
        </div>
    )
}
