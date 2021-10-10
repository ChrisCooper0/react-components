import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";

const OutsideClick = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Link className="link" to="/">
        Back
      </Link>{" "}
      <OutsideClickHandler onOutsideClick={handleClick}>
        <button onClick={handleClick}>{isOpen ? "Close" : "Open"}</button>
      </OutsideClickHandler>
      {isOpen && (
        <div className="card">
          <h3>Click outside to close</h3>
        </div>
      )}
    </div>
  );
};

export default OutsideClick;
