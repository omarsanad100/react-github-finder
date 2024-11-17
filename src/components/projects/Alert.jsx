import React from "react";
import "./style.css";

const Alert = ({ message, type }) => {
  return alert !== null && <div className={`alert ${type}`}>{message}</div>;
};

export default Alert;
