import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCartButton
          onClickShow={props.onShowCart}
          onClickHide={props.onHideCart}
        />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="mealsImage" />
      </div>
    </>
  );
}
