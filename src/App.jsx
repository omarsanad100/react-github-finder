import React, { useState } from "react";
import Navbar from "./components/projects/Navbar";
import Alert from "./components/projects/Alert";
import UserItems from "./components/projects/UserItems";
import GithubState from "./context/github/githubState";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import axios from "axios";
import Search from "./components/projects/Search";

const App = () => {
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // Get Users repos
  const userRepos = async (username) => {
    setLoading(true);
    try {
      const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
      const clientSecret = import.meta.env.VITE_GITHUB_CLIENT_SECRET;

      const res = await axios.get(
        `https://api.github.com/search/users/${username}/repos?per_page=5&sort=created:asc&client_id=${clientId}&client_secret=${clientSecret}`
      );

      setRepos(res.data.items || []);

      setLoading(false);
    } catch (error) {
      console.error(`Error in Fetching Users, ${error}`);
    } finally {
      setLoading(false);
    }
  };

  // set Alert
  const handleAlert = (msg, type) => {
    setAlert({ msg, type });
  };

  return (
    <GithubState>
      <Routers>
        <Navbar />
        {alert && <Alert message={alert.msg} type={alert.type} />}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Search handleAlert={handleAlert} />
                <UserItems userRepos={userRepos} repos={repos} />
              </>
            }
          ></Route>
        </Routes>
      </Routers>
    </GithubState>
  );
};

export default App;
