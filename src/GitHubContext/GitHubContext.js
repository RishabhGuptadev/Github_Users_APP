import { createContext,useContext,useEffect } from "react"
import {
SEARCHBEGIN,
SEARCHSUCCESS,
SEARCHERROR, 
LOADING
} from "./types"

import axios from "axios" 
import React , {useReducer} from "react";
import reducer from "./GitHubReducer"
const GitHubContext =  createContext();

const initialState = {
    githubUsers : [],
    text: '',
    loading: false
}
export const GithubProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchUsers  = async(text) =>{
         console.log("this is the text",text);
         const res = await axios(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
         const user = res.data.items;
         console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
         dispatch({type: SEARCHSUCCESS, payload:user});
    }



    const searchUser = (e) => {
        const name = e.target.name; 
        const value = e.target.value; 
        dispatch({type:SEARCHBEGIN, payload: value})
    }

    useEffect(() => {
        dispatch({type:LOADING})
        fetchUsers(state.text);

     }, [state.text]);

        return (
            <GitHubContext.Provider value = {{...state,searchUser,fetchUsers}} >{children}</GitHubContext.Provider>
        )
}

export const useGitHubContext = () =>{
    return useContext(GitHubContext); 
} 