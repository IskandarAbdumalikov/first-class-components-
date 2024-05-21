import { Component } from 'react'
import "./hero.scss"

export default class Hero extends Component {
  render() {
    return (
      <section className="hero container">
        <div className="hero__top">
          <div className="hero__top__left">
            <button>Горящие товары</button>
            <button>Одна цена</button>
          </div>
          <div className="hero__top__right">
            <button>Chilonzor Tumani</button>
            <button>RU</button>
            <button>UZS</button>
          </div>
        </div>
        <div className="hero__bottom">
          <div className="hero__bottom__left">
            <h2>Одна цена</h2>
            <h3>При заказе от 3 до 10 товаров</h3>
            <button className="hero__bottom__btn">Купить</button>
          </div>
          <div className="hero__bottom__right"></div>
        </div>
      </section>
    );
  }
}
