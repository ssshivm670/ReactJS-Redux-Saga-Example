import { NEXT, PREVIOUS, SET_USER } from "../constants";
const initialState = {
  id: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case NEXT:
    //   return {
    //     ...state,
    //     id: state.id + 1
    //   };
    case PREVIOUS:
      return {
        ...state,
        id: state.id - 1
      };
    case SET_USER:
      const { user } = action;
      return {
        ...state,
        user
      };
    default:
      return state;
  }
};
