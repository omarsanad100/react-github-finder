import React from "react";
import loadingSpinner from "/assets/spinner.gif";

const Spinner = () => {
  return (
    <div>
      <img
        src={loadingSpinner}
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default Spinner;
