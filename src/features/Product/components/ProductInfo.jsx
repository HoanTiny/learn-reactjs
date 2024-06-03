import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { formatPrice } from "../../../utils";

ProductInfo.propTypes = { product: PropTypes.object };

function ProductInfo(product = {}) {
  console.log(product);
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } =
    product.product;
  return (
    <Box
      sx={{
        paddingBottom: "12px",
        borderBottom: `1px solid #ececec`,
        textAlign: "left",
      }}
    >
      <Typography component="h1" variant="h4">
        {name}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          margin: "16px 0",
        }}
      >
        {shortDescription}
      </Typography>

      <Box
        sx={{
          padding: "16px",
          backgroundColor: "#e7e7e7",
        }}
      >
        <Box
          component="span"
          sx={{
            marginRight: "16px",
            fontSize: "26px",
            fontWeight: "bold",
          }}
        >
          {formatPrice(salePrice)}
        </Box>

        {promotionPercent > 0 && (
          <>
            <Box
              component="span"
              sx={{ marginRight: "16px", textDecoration: "line-through" }}
            >
              {formatPrice(originalPrice)}
            </Box>

            <Box component="span">{`-${promotionPercent}%`}</Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfo;
