import { Box, Container, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import productApi from "../../../api/productApi";
import ProductList from "../components/ProductList";
import ProductSkeletonList from "../components/ProductSkeletonList";

ProductListPage.propTypes = {};

function ProductListPage(props) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getAll({ _page: 1, _limit: 10 });
        console.log(data);
        setProductList(data);
      } catch (error) {
        console.log("error", error);
      }
      console.log("productList", productList);
      setLoading(false);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Box>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Paper elevation={0}> Left Column</Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper elevation={1}>
                {loading ? (
                  <ProductSkeletonList length={6} />
                ) : (
                  <ProductList data={productList} />
                )}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default ProductListPage;
