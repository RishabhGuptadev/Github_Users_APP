import React from 'react'
import {FiSearch} from "react-icons/fi"
import { useGitHubContext } from '../GitHubContext/GitHubContext'
import Loading  from './Loading';
export default function SearchBar() {
    const {text, searchUser,loading} = useGitHubContext();
    return (
        <div>
        <div style = {container}>
        <input style = {inputStyle} type ="text" name ="user" value={text} onChange= {(e)=>searchUser(e)}/>
        <FiSearch style={{marginLeft:"4px" ,fontSize:"30px"}}/>
        </div>
            {loading&&<Loading/>}
        </div>
    )
}

const container = {
    display: "flex",
    alignItems:"center",
    justifyContent:"center",
    marginTop:"50px"
}

const inputStyle ={
    padding  : "20px 80px",
    fontSize: "25px",
    padding:"10px 2px"
}