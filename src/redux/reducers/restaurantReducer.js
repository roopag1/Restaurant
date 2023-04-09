import { FETCH_RESTAURANTS } from "../actions/restaurantActions";

const initialState = {
  restaurants: [],
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return { ...state, restaurants: action.payload };
    default:
      return state;
  }
};

export default restaurantReducer;
