import React from "react";
import Styles from "./Style.module.css";

export default function Button({
  color = "blue",
  handleClick,
  text = "Log In",
  buttonStyle = "basic",
  size = "large"
}) {
  return (
    <button
      className={`${Styles.Button} ${Styles[color]} ${Styles[buttonStyle]} ${Styles[size]}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};