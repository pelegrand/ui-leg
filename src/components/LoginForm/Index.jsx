import React from "react";

import Button from "../Button/Index";

import Styles from "./Style.module.css";

export default function LoginForm({
  title = "connexion",
  subtitle = "to your user account",
  buttonColor = "red",
  buttonText = "Log In",
  placeHolderOne = "username",
  placeHolderTwo = "password",
}) {
  return (
    <div className={Styles.ConnexionContainer}>
      <span className={Styles.ConnexionTitle}>{title.toUpperCase()}</span>
      <span>{subtitle}</span>
      <form className={Styles.ConnexionForm}>
        <div className={Styles.ConnexionInputContainer}>
          <input
            placeholder={placeHolderOne}
            className={Styles.ConnexionInput}
            required
          />
        </div>
        <div className={Styles.ConnexionInputContainer}>
          <input
            placeholder={placeHolderTwo}
            type="password"
            className={Styles.ConnexionInput}
            required
          />
        </div>
        <div className={Styles.ConnexionFooter}>
          <Button type="submit" />
        </div>
      </form>
    </div>
  );
}