import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  START_LOADING,
  STOP_LOADING,
} from "../types";

export default (state, action) => {
  if (action.type === SEARCH_USERS) {
    return {
      ...state,
      users: action.payload,
      loading: false,
    };
  } else if (action.type === GET_USER) {
    return {
      ...state,
      user: action.payload,
      loading: false,
    };
  } else if (action.type === CLEAR_USERS) {
    return {
      ...state,
      users: [],
    };
  } else if (action.type === GET_REPOS) {
    return {
      ...state,
      repos: action.payload,
      loading: false,
    };
  } else if (action.type === START_LOADING) {
    return {
      ...state,
      loading: true,
    };
  } else if (action.type === STOP_LOADING) {
    return {
      ...state,
      loading: false,
    };
  } else {
    return state;
  }
};
