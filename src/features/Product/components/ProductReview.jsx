import React from "react";
import { useOutletContext } from "react-router-dom";
ProductReview.propTypes = {};

function ProductReview(props) {
  props = useOutletContext();
  return <div>{props.name}</div>;
}

export default ProductReview;
