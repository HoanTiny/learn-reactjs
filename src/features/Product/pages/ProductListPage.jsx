import { Box, Container, Grid, Pagination, Paper } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import productApi from "../../../api/productApi";
import ProductList from "../components/ProductList";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductSort from "../components/ProductSort";
import ProductFilters from "../components/ProductFilters";
import FilterViewer from "../components/Filters/FilterViewer";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

ProductListPage.propTypes = {};

function ProductListPage(props) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 10,
      _sort: params._sort || "salePrice:ASC",
      isPromotion: params.isPromotion === "true",
      isFreeShip: params.isFreeShip === "true",
    };
  }, [location.search]);
  const [pagination, setPagination] = useState({ limit: 10, total: 10 });

  // const [fillters, setfillter] = useState(() => ({
  //   ...queryParams,
  //   // _page: Number.parseInt(queryParams._page) || 1,
  //   // _limit: Number.parseInt(queryParams._limit) || 0,
  //   // _sort: queryParams._sort || "salePrice:ASC",
  // }));
  useEffect(() => {
    // console.log("fillters", fillters);
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParams);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("error", error);
      }
      setLoading(false);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams]);

  const handleSortChange = (newSortVlaue) => {
    // setfillter((preFillters) => ({
    //   ...preFillters,
    //   _sort: newSortVlaue,
    // }));

    const filters = {
      ...queryParams,
      _sort: newSortVlaue,
    };

    const queryString = new URLSearchParams(filters).toString();
    navigate(`?${queryString}`);
  };

  const handlePageChange = (e, page) => {
    // setfillter((prev) => ({
    //   ...prev,
    //   _page: page,
    // }));

    const filters = {
      ...queryParams,
      _page: page,
    };

    const queryString = new URLSearchParams(filters).toString();
    navigate(`?${queryString}`);
  };

  const handleFiltersChange = (newFilters) => {
    // setfillter((prev) => ({
    //   ...prev,
    //   ...newFilters,
    // }));

    const filters = {
      ...queryParams,
      ...newFilters,
    };

    const queryString = new URLSearchParams(filters).toString();
    navigate(`?${queryString}`);
  };

  const handleSetNewFilters = (newFilters) => {
    // console.log("newFilters", newFilters);
    // setfillter(newFilters);
    const queryString = new URLSearchParams(newFilters).toString();
    navigate(`?${queryString}`);
  };

  // useEffect(() => {
  //   //TODO: Sync filters to URL
  //   const queryString = new URLSearchParams(fillters).toString();
  //   navigate(`?${queryString}`);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [fillters]);
  return (
    <div>
      <Box>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Paper elevation={0} padding="12px">
                <ProductFilters
                  onChange={handleFiltersChange}
                  filters={queryParams}
                />
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper elevation={1}>
                <ProductSort
                  currentSort={queryParams._sort}
                  onChange={handleSortChange}
                />
                <FilterViewer
                  filters={queryParams}
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
