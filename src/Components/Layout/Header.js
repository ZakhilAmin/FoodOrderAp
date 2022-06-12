import { Fragment } from "react";
import MealsImage from "../Assets/meals.jpg";

import classess from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classess.header}>
        <h1>AGZ-Meals</h1>
        {/* <button>Cart</button> */}
        <HeaderCartButton />
      </header>
      <div className={classess["main-image"]}>
        <img src={MealsImage} alt="Table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
