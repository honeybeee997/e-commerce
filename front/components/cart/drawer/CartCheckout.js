import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { backdropActions } from "../../../store/backdrop";
import { cartActions } from "../../../store/cart";
import Button from "../../extras/Button";
import Checkbox from "../../forms/Checkbox";

import styles from "../Cart.module.css";

const CartCheckout = () => {
  const [checked, setChecked] = useState(false);

  const checkChangeHandler = (checked) => {
    setChecked(checked);
  };

  const dispatch = useDispatch();

  const navigateToCheckout = () => {
    dispatch(backdropActions.close());
    dispatch(cartActions.close());
  };

  return (
    <article
      className={`p-4 flex items-center flex-col gap-4 ${styles.cart_checkout}`}
    >
      <div className="flex items-center justify-between w-full">
        <h3>Subtotal :</h3>
        <h3>£87.00 GBP</h3>
      </div>
      <div className="checkout-agreement ">
        <p className="mb-1">Taxes and shipping calculated at checkout</p>
        <Checkbox
          label="I agree with the terms and conditions."
          name="termsAggrement"
          id="cartCheckoutAggrement"
          onChange={checkChangeHandler}
        />
      </div>
      {checked && (
        <div className="checkout-btns">
          <Button to="/checkout" onClick={navigateToCheckout}>
            CHECK OUT
          </Button>
        </div>
      )}
    </article>
  );
};

export default CartCheckout;
