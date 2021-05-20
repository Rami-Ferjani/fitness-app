import { CREATE_WORKOUT, WORKOUT_LOADED } from "../actions/types";
import { ADD_DAY } from "../actions/types";
const initialState = {
  Description: {},
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case WORKOUT_LOADED: {
      return {
        ...state,
        payload,
      };
    }
    case CREATE_WORKOUT: {
      /*const {workout}=payload;*/
      return {
        ...state,
        description: { name: "workout c" },
      };
    }
  }
  return state;
}
