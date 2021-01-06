import React from "react";
import "./Product.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "./StateProvider";

function Product({ id, title, alt, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("Basket: ", basket);

  const addToBasket = () => {
    //dispatch the item into the data layer

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        alt: alt,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
