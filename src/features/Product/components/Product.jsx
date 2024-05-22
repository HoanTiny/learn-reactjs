import { Box, Typography } from "@mui/material";
import React from "react";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "../../../constants/common";

Product.propTypes = {};

function Product({ product }) {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : `${THUMBNAIL_PLACEHOLDER}`;
  return (
    <Box padding={1}>
      <Box padding={1} minHeight="215px">
        <img src={thumbnailUrl} width="100%" alt={product.name} />
      </Box>
      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.salePrice)}
          ,
        </Box>
        {product.promotionPercent > 0 ? `-${product.promotionPercent}%` : ""}
      </Typography>
    </Box>
  );
}

export default Product;
