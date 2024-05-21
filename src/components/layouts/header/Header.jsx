import { Component } from "react";
import logo from '../../../assets/logo.svg'

import "./header.scss";

export default class Header extends Component {
  render() {
    return (
      <header className=" header">
        <nav className="header__nav container">
          <div className="header__logo">
            <img src={logo} alt="" />
          </div>
          <form action="" className="header__form">
            <button className="header__form__btn">Library</button>
            <div className="header__inputs">
              <input placeholder="Sviter" type="text" />
              <button>Search</button>
            </div>
          </form>
          <div className="header__btns">
            <button className="header__form__btn">Booking</button>
            <button className="header__form__btn">Korzina</button>
            <button className="header__form__btn">Log in</button>
          </div>
        </nav>
      </header>
    );
  }
}
