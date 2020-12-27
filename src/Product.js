import React from "react";
import "./Product.css";
import StarRateIcon from "@material-ui/icons/StarRate";

function Product({ title,alt, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          <p>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarRateIcon />
              ))}
          </p>
        </div>
      </div>

      <img alt={alt} src={image} />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
