import {
USER_LOADED,
USER_LOADING,
AUTH_ERROR,
LOGIN_SUCCESS,
LOGIN_FAIL,
LOGOUT_SUCCESS,
REGISTER_SUCCESS,
REGISTER_FAIL
} from "../actions/types";

const initialState={
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    isLoading:false,
    person:null
};
export default function(state=initialState,action){
    switch(action.type){
        case USER_LOADING:
            return {
                ...state,
                isLoading:true
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated:true,
                isLoading:false,
                person:action.payload
            };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token',action.payload.token);
            return {
                ...state,
                ...action.payload,     //user + token
                isAuthenticated:true,
                isLoading:false,
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.removeItem('token');//to clear everything in case of error
            return{
                ...state,
                token:null,
                person:null,
                isAuthenticated:false,
                isLoading:false,
            };
        default:
            return state;
    }
}