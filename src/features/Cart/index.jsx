import React from "react";
import { useSelector } from "react-redux";
import { cartTotalSelector } from "./selectors";

CartFeature.propTypes = {};

function CartFeature(props) {
  const toltal = useSelector(cartTotalSelector);
  return <div>CartFeature: {toltal}</div>;
}

export default CartFeature;
