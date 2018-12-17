import React from "react";
import PropTypes from "prop-types";

import { formatPrice } from "../helpers";
class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.string,
      desc: PropTypes.string,
      price: PropTypes.number
    }),
    addToOrder: PropTypes.func
  };

  handleClick = () => {
    this.props.addToOrder(this.props.index);
  };
  render() {
    const { image, name, price, status, desc } = this.props.details;

    const isAvaliable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <div className="price">{formatPrice(price)}</div>
        </h3>
        <p>{desc}</p>
        <button onClick={this.handleClick} disabled={!isAvaliable}>
          {" "}
          {isAvaliable ? " Add to Cart" : "Sold Out"}
        </button>
      </li>
    );
  }
}

export default Fish;
