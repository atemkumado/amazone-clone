import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  const [{ basket }] = useStateValue();
  let amountOfBasket = basket.length;
  let getTotalPrice = () => {
    let total = 0;
    for (let item in basket) {
      total += basket[item].price;
    }
    return "$" + total;
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({amountOfBasket} {amountOfBasket > 1 ? "items" : "item"}
              ):
              <strong>{amountOfBasket > 0 ? getTotalPrice() : 0};</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
