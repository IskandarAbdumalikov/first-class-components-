import "./products.scss";
import axios from "axios";
import { Component } from "react";
let API = "https://dummyjson.com";
export default class Products extends Component {
  constructor() {
    super(),
      (this.state = {
        data: null,
        offset: 1,
        categories: null,
        categoryValue: "/products",
      });
  }
  componentDidMount() {
    axios
      .get(`${API}${this.state.categoryValue}?limit=${this.state.offset * 5}`)
      .then((res) => this.setState({ data: res.data.products }))
      .catch((err) => console.log(err));
    axios
      .get(`${API}/products/categories`)
      .then((res) => this.setState({ categories: res.data }))
      .catch((err) => console.log(err));
  }
  componentDidUpdate(_, prevState) {
    if (
      this.state.offset !== prevState.offset ||
      this.state.categoryValue !== prevState.categoryValue
    ) {
      axios
        .get(`${API}${this.state.categoryValue}?limit=${this.state.offset * 5}`)
        .then((res) => this.setState({ data: res.data.products }))
        .catch((err) => console.log(err));
    }
  }
  render() {
    return (
      <section className=" container  products">
        <ul className="category__cards">
          <data
            onClick={(e) => this.setState({ categoryValue: e.target.value })}
            className="category__card"
            style={{
              background:
                this.state.categoryValue === `/products` ? "crimson" : "red",
            }}
            value="/products"
          >
            All
          </data>

          {this.state.categories?.map((el) => (
            <data
              style={{
                background:
                  this.state.categoryValue === `/products/category/${el}`
                    ? "crimson"
                    : "red",
              }}
              className="category__card"
              key={el}
              onClick={(e) => this.setState({ categoryValue: e.target.value })}
              value={`/products/category/${el}`}
            >
              {el}
            </data>
          ))}
        </ul>
        <div className="products__cards">
          {this.state.data?.map((el) => (
            <div className="product__card" key={el.id}>
              <div className="product__card__img">
                <img src={el.thumbnail} alt="" />
              </div>
              <div className="product__card__info">
                <p>{el.description}</p>
                <h3>{el.rating}</h3>
                <h2>{el.price} $</h2>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => this.setState({ offset: this.state.offset + 1 })}
        >
          See more
        </button>
      </section>
    );
  }
}
