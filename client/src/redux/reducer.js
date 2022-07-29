import { GET_CHARACTERS, GET_EPISODES } from "./actions";

const initialState = {
  characters: [],
  episodes: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case GET_EPISODES:
      return {
        ...state,
        episodes: action.payload,
      };
    default:
      return state;
  }
}

