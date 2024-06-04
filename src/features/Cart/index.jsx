import React from "react";
import { useSelector } from "react-redux";
import { cartTotalSelector } from "./selectors";
import { Box, Container, Grid, Paper } from "@mui/material";
import ItemCart from "./components/ItemCart";

CartFeature.propTypes = {};

function CartFeature(props) {
  const toltal = useSelector(cartTotalSelector);
  const storeState = useSelector((state) => state.cart.cartItems);
  console.log(storeState);
  return (
    <div>
      <Box pt={4}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Paper>
                {storeState.map((item) => (
                  <ItemCart key={item.id} product={item.product} />
                ))}
              </Paper>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                padding: "12px",
              }}
            >
              <Paper>CartFeature: {toltal}</Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default CartFeature;
