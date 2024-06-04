import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, IconButton, OutlinedInput } from "@mui/material";
import {
  AddCircleOutline,
  CheckBox,
  RemoveCircleOutline,
} from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "../../../constants/common";
import { formatPrice } from "../../../utils";
import QuantityField from "../../../components/form-controls/QuantityField";

ItemCart.propTypes = {
  product: PropTypes.array,
};

function ItemCart({ product }) {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : `${THUMBNAIL_PLACEHOLDER}`;
  console.log(`thumbnailUrl`, thumbnailUrl);
  console.log(`product`, product);
  return (
    <Box>
      <Grid container direction="column">
        <Grid item padding="20px" textAlign="left">
          <CheckBox label="Label" />
          <span>Chọn tất cả</span>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            borderBottom: "1px solid #ccc",
          }}
        >
          <Grid item xs={1}>
            <CheckBox />
          </Grid>
          <Grid item xs={4}>
            <img src={thumbnailUrl} alt={product.name} width="100%" />
          </Grid>
          <Grid item xs={2}>
            {formatPrice(product.salePrice)}
          </Grid>
          <Grid item xs={2}>
            <Box
              sx={{
                display: "flex",
                flexFlow: "row nowrap",
                alignItems: "center",
                maxWidth: "200px",
              }}
            >
              <IconButton>
                <RemoveCircleOutline />
              </IconButton>

              <OutlinedInput value="1" />
              <IconButton>
                <AddCircleOutline />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={2}>
            350000
          </Grid>
          <Grid item xs={1}>
            <DeleteIcon />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ItemCart;
