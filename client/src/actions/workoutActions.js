import {CREATE_WORKOUT} from "./types"
export const createWorkout=workout=>({
    type:CREATE_WORKOUT,
    payload:workout,
})