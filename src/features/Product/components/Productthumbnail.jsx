import React from "react";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "../../../constants/common";

import { Box } from "@mui/material";

Productthumbnail.propTypes = {};

function Productthumbnail(product) {
  //   console.log(`product`, product);
  const thumbnailUrl = product.product.thumbnail
    ? `${STATIC_HOST}${product.product.thumbnail?.url}`
    : `${THUMBNAIL_PLACEHOLDER}`;

  return (
    <Box>
      <img src={thumbnailUrl} alt={product.name} width="100%" />
    </Box>
  );
}

export default Productthumbnail;
