import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  START_LOADING,
  STOP_LOADING,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async (text) => {
    dispatch({ type: START_LOADING });

    try {
      const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
      const clientSecret = import.meta.env.VITE_GITHUB_CLIENT_SECRET;

      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${clientId}&client_secret=${clientSecret}`
      );

      dispatch({
        type: SEARCH_USERS,
        payload: res.data.items,
      });

      dispatch({ type: STOP_LOADING });
    } catch (error) {
      console.error(`Error in Fetching Users, ${error}`);
    } finally {
      dispatch({ type: STOP_LOADING });
    }
  };

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
