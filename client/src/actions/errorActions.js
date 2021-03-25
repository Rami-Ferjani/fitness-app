import {GET_ERRORS,CLEAR_ERRORS} from './types';


//if theres an error we return this,puts the error in our sttte
//RETRUN ERRORS
export const returnErrors=(msg,status,id=null)=>{
    return{
        type:GET_ERRORS,
        payload:{ msg,status,id}
    }
}

//clear errors
export const clearErrors=()=>{
    return {
        type:CLEAR_ERRORS
    }
}