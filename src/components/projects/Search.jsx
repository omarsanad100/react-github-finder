import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Search = ({ handleAlert }) => {
  const { searchUsers, clearUsers, users } = useContext(GithubContext);
  const [text, setText] = useState("");

  const handleSearch = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      handleAlert("Please Enter Something", "danger");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="search"
          id="search"
          placeholder="Search..."
          value={text}
          onChange={handleSearch}
        />
        <button type="submit">Search</button>
      </form>

      {users.length > 0 && (
        <form className="centring-clearUser" onClick={clearUsers}>
          <button type="button" className="clearUser">
            Clear
          </button>
        </form>
      )}
    </div>
  );
};

Search.propTypes = {
  clearUsers: PropTypes.func,
  showClear: PropTypes.bool,
  handleAlert: PropTypes.func,
};

export default Search;
