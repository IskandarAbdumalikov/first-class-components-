import { Component, Fragment } from "react";
import Hero from "../../components/hero/Hero";
import Header from "../../components/layouts/header/Header";
import Products from "../../components/products/Products";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div>
          <Hero />
          <Products />
        </div>
      </Fragment>
    );
  }
}
