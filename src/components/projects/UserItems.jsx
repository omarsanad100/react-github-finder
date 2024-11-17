import Spinner from "../Spinner";
import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";

const UserItems = () => {
  // const githubContext = useContext(GithubContext);
  const { users, loading } = useContext(GithubContext);

  if (loading) {
    return (
      <div className="container">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container">
      {users.map((user) => (
        <div key={user.id} className="cardTextCenter">
          <img src={user.avatar_url} alt={user.login} />
          <h3>{user.login}</h3>
          <section>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              More
            </a>
          </section>
        </div>
      ))}
    </div>
  );
};

export default UserItems;
