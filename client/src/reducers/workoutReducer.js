import { CREATE_WORKOUT } from "../actions/types";
import { ADD_DAY } from "../actions/types";
const initialState = {
  description: {},
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_DAY: {
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
