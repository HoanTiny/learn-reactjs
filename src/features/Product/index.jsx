import { Box } from "@mui/material";
import React from "react";
import ProductListPage from "./pages/ProductListPage";
// import PropTypes from 'prop-types';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  return (
    <Box pt={4}>
      <h2>Product Feature</h2>
      <ProductListPage />
    </Box>
  );
}

export default ProductFeature;
