import { Box, Container, Grid, Paper } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Productthumbnail from "../components/Productthumbnail";
import useProductDetail from "../hooks/useProductDetail";
import ProductInfo from "../components/ProductInfo";
import AddToCartForm from "../components/AddToCartForm";
import ProductMenu from "../components/ProductMenu";

function DetailPage() {
  const { id } = useParams();

  const { product, loading } = useProductDetail(id);
  console.log(`product`, product);

  if (loading) {
    return <Box>Loading</Box>;
  }

  const handleAddToCartSubmit = (formValues) => {
    console.log(`Form submit`, formValues);
  };
  return (
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
      </Container>
    </Box>
  );
}

export default DetailPage;
