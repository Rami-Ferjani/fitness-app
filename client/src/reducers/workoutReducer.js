import {CREATE_WORKOUT} from "../actions/types"
import {ADD_DAY} from "../actions/types"
const initialState={
    description:{},
    day1:{},
}
export default function(state=initialState,action){
    const {type,payload}=action;
    switch(type){
        case ADD_DAY:{
            const {day}=payload;
            return {
                ...state,
                day,
            }
        }
        case  CREATE_WORKOUT :{
            /*const {workout}=payload;*/
            return {
                ...state,
                description:{name :"workout c"},
                
            }
        }

    }
    return state;
}