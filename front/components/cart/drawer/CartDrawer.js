import React from "react";
import { cartActions } from "../../../store/cart";
import DrawerPortal from "../../extras/Drawer";
import CartCheckout from "./CartCheckout";
import CartItemsList from "./CartItemsList";

const CartDrawer = () => {
  return (
    <DrawerPortal heading="Shopping Cart" closerFn={cartActions}>
      <CartItemsList />
      <CartCheckout />
    </DrawerPortal>
  );
};

export default CartDrawer;
