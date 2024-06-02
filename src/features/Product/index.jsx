import { Box } from "@mui/material";
// import ProductListPage from "./pages/ProductListPage";
import { Outlet } from "react-router-dom";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  return (
    <Box pt={4}>
      {/* <ProductListPage /> */}
      <Outlet />
    </Box>
  );
}

export default ProductFeature;
