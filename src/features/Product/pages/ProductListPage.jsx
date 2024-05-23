import { Box, Container, Grid, Pagination, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import productApi from "../../../api/productApi";
import ProductList from "../components/ProductList";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductSort from "../components/ProductSort";
import ProductFilters from "../components/ProductFilters";
import FilterViewer from "../components/Filters/FilterViewer";

ProductListPage.propTypes = {};

function ProductListPage(props) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({ limit: 10, total: 10 });
  const [fillters, setfillter] = useState({
    _page: 1,
    _limit: 10,
    _sort: "salePrice:ASC",
  });

  useEffect(() => {
    console.log("fillters", fillters);
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(fillters);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("error", error);
      }
      setLoading(false);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fillters]);

  const handleSortChange = (newSortVlaue) => {
    setfillter((preFillters) => ({
      ...preFillters,
      _sort: newSortVlaue,
    }));
  };

  const handlePageChange = (e, page) => {
    setfillter((prev) => ({
      ...prev,
      _page: page,
    }));
  };

  const handleFiltersChange = (newFilters) => {
    setfillter((prev) => ({
      ...prev,
      ...newFilters,
    }));
  };

  const handleSetNewFilters = (newFilters) => {
    console.log("newFilters", newFilters);
    setfillter(newFilters);
  };
  return (
    <div>
      <Box>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Paper elevation={0} padding="12px">
                <ProductFilters
                  onChange={handleFiltersChange}
                  filters={fillters}
                />
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper elevation={1}>
                <ProductSort
                  currentSort={fillters._sort}
                  onChange={handleSortChange}
                />
                <FilterViewer
                  filters={fillters}
                  onChange={handleSetNewFilters}
                />

                {loading ? (
                  <ProductSkeletonList length={6} />
                ) : (
                  <ProductList data={productList} />
                )}
                <Box
                  sx={{
                    display: "flex",
                    flexFlow: "center",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <Pagination
                    onChange={handlePageChange}
                    count={Math.ceil(pagination.total / pagination.limit)}
                    color="primary"
                  />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default ProductListPage;
