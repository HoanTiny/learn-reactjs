import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import {
  Box,
  FormControlLabel,
  Grid,
  IconButton,
  Input,
  Modal,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "../../../constants/common";
import { formatPrice } from "../../../utils";
import { removeFromCart, setQuantity } from "../cartSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

ItemCart.propTypes = {
  product: PropTypes.object,
};

function ItemCart({ product, quantity }) {
  const [itemCount, setItemCount] = useState(quantity);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : `${THUMBNAIL_PLACEHOLDER}`;

  const handleIncrease = () => {
    console.log(`itemCount`, itemCount);
    const setCountItem = setQuantity({
      id: product.id,
      quantity: itemCount + 1,
    });
    setItemCount(itemCount + 1);
    dispatch(setCountItem);
    console.log(`setCountItem`, setCountItem);
  };

  const handleDecrease = () => {
    if (itemCount > 1) {
      const setCountItem = setQuantity({
        id: product.id,
        quantity: itemCount - 1,
      });
      setItemCount(itemCount - 1);
      dispatch(setCountItem);
    }
  };

  const handleOnChange = (e) => {
    if (e.target.value > 0) {
      // const setCountItem = setQuantity({
      //   id: product.id,
      //   quantity: e.target.value,
      // });

      // setItemCount(e.target.value);
      // dispatch(setCountItem);
      setItemCount(Number(e.target.value));
    }
    // setItemCount(e.target.value);
  };

  const handleBlur = (e) => {
    console.log("blur", e.target.value);
    if (e.target.value > 0) {
      const setCountItem = setQuantity({
        id: product.id,
        quantity: e.target.value,
      });

      setItemCount(Number(e.target.value));
      dispatch(setCountItem);
    }
  };

  const handleDelete = () => {
    const deleteItem = removeFromCart(product.id);
    console.log(`deleteItem`, deleteItem);
    dispatch(deleteItem);
  };
  return (
    <Box padding="20px">
      <Grid container direction="column">
        <Grid item textAlign="left">
          <FormControlLabel control={<Checkbox />} label="Shopp" />
        </Grid>
        <Grid
          container
          // justifyContent="center"
          alignItems="center"
          sx={{
            borderBottom: "1px solid #ccc",
          }}
        >
          <Grid item xs={1} textAlign="left">
            <FormControlLabel control={<Checkbox />} />
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <img
                src={thumbnailUrl}
                alt={product.name}
                width="80px"
                height="80px"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  marginLeft: "10px",
                }}
              >
                <img
                  src="https://salt.tikicdn.com/ts/upload/19/60/0a/05d3f866c682f7e9ece3d8f7929bdfef.png"
                  alt=""
                  height="20px"
                />
                <span
                  style={{
                    textAlign: "left",
                  }}
                >
                  {product.name}
                </span>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            {formatPrice(product.salePrice)}
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "84px",
                border: "1px solid #ccc",
                borderRadius: "3px",
              }}
            >
              <IconButton
                onClick={handleDecrease}
                sx={{
                  width: "23px",
                  height: "15px",
                }}
              >
                <RemoveIcon
                  sx={{
                    width: "23px",
                    height: "15px",
                  }}
                />
              </IconButton>
              <Input
                value={itemCount}
                type="number"
                sx={{
                  borderRight: "1px solid #ccc",
                  borderLeft: "1px solid #ccc",
                  textAlign: "center !important",
                  fontSize: "13px",
                  padding: "6px",
                  "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
                    {
                      WebkitAppearance: "none",
                      margin: 0,
                    },
                  "& input[type=number]": {
                    MozAppearance: "textfield", // Firefox
                  },

                  "&::before": {
                    border: "none",
                  },
                  "&::after": {
                    border: "none",
                  },

                  width: "32px",
                }}
                onChange={(e) => {
                  handleOnChange(e);
                }}
                onBlur={(e) => {
                  handleBlur(e);
                  handleOnChange(e);
                  // console.log("blur", e.target.value);
                }}
              />
              <IconButton
                onClick={handleIncrease}
                sx={{
                  width: "23px",
                  height: "15px",
                }}
              >
                <AddIcon
                  sx={{
                    width: "23px",
                    height: "15px",
                  }}
                />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={2}>
            {formatPrice(product.salePrice * quantity)}
          </Grid>
          <Grid item xs={1}>
            <DeleteIcon
              onClick={handleOpen}
              sx={{
                cursor: "pointer",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 id="modal-modal-title">
            <WarningAmberIcon
              sx={{
                color: "red",
                fontSize: "30px",
                marginRight: "10px",
              }}
            />
            Delete Item
          </h2>
          <p id="modal-modal-description">
            Are you sure you want to delete this item?
          </p>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button
              onClick={handleClose}
              style={{
                marginRight: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                border: "1px solid rgba(0, 0, 0, 0.23)",
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              style={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "5px",
                border: "1px solid rgba(0, 0, 0, 0.23)",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default ItemCart;
