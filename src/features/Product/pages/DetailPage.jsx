import { Box, Container, Grid, Paper, LinearProgress } from "@mui/material";
import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Productthumbnail from "../components/Productthumbnail";
import useProductDetail from "../hooks/useProductDetail";
import ProductInfo from "../components/ProductInfo";
import AddToCartForm from "../components/AddToCartForm";
import ProductMenu from "../components/ProductMenu";
import { useDispatch } from "react-redux";
import { addToCart, hideMiniCart, showMiniCart } from "../../Cart/cartSlice";
function DetailPage() {
  const { id } = useParams();
  const { product, loading } = useProductDetail(id);
  const dispatch = useDispatch();

  if (loading) {
    return (
      <Box>
        <LinearProgress />
      </Box>
    );
  }

  const handleAddToCartSubmit = (formValues) => {
    const addToCartAction = addToCart({
      id: product.id,
      product: product,
      quantity: formValues.quantity,
    });
    const showMinicart = showMiniCart();
    const hide = hideMiniCart();
    dispatch(addToCartAction);
    dispatch(showMinicart);
    setTimeout(() => {
      dispatch(hide);
    }, 3000);
  };
  return (
    <div>
      <Box>
        <Container>
          <Paper elevation={0}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={4}
                sx={{
                  borderRight: `1px solid #eaeaea`,
                  padding: "12px",
                }}
              >
                <Productthumbnail product={product} />
              </Grid>
              <Grid
                item
                xs={8}
                sx={{
                  padding: "12px",
                }}
              >
                <ProductInfo product={product} />
                <AddToCartForm onSubmit={handleAddToCartSubmit} />
              </Grid>
            </Grid>
          </Paper>
          <ProductMenu />

          <Outlet context={{ ...product }} />
        </Container>
      </Box>
    </div>
  );
}

export default DetailPage;
