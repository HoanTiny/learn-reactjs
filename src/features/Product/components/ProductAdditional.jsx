import { useOutletContext } from "react-router-dom";
import React from "react";

ProductAdditional.propTypes = {};

function ProductAdditional(props) {
  props = useOutletContext();

  return <div>{props.id}</div>;
}

export default ProductAdditional;
