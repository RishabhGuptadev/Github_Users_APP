import { SEARCHBEGIN, SEARCHSUCCESS,LOADING } from "./types";
const Userreducer = (state, action) =>{

    if(action.type === SEARCHBEGIN){
        return {...state, text: action.payload} 
    }

    if(action.type === SEARCHSUCCESS){
        console.log("this is the userdata",action.payload);
       return {...state, githubUsers : action.payload,loading:false}
    }
    if(action.type === LOADING){
        return {...state, loading :true}
    }
    
}

export default Userreducer;