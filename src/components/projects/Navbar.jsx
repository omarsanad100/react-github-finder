import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = (props) => {
  const { title = "Github Finder", icon = "fa-brands fa-square-github" } =
    props;

  return (
    <nav className="nav">
      <h1>
        <i className={icon}></i>
        <span> {title}</span>
      </h1>
    </nav>
  );
};

export default Navbar;
