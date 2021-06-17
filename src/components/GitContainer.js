import React from 'react'
import {useGitHubContext} from "../GitHubContext/GitHubContext"
import SingleUser from './SingleUser';
export default function GitContainer() {
const {githubUsers} = useGitHubContext();

    return (
        <div style={{display:"flex" ,margin:"30px 100px", flexWrap:"wrap"}}>
            {githubUsers.map((user)=>{
                console.log(user)
                return <SingleUser user ={user} />
              
            })}
        </div>
    )
}
