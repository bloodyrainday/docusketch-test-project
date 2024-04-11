import React from "react";

const Button = ({ setRandomIcon, arrFasIcons }) => {
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setTimeout(() => {
            setRandomIcon(Math.floor(Math.random() * arrFasIcons.length));
          }, 3000);
        }}
      >
        change icon
      </button>
    </>
  );
};

export default Button;
