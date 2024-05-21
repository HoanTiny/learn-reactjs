import { Box } from "@mui/material";
import ProductListPage from "./pages/ProductListPage";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  return (
    <Box pt={4}>
      <ProductListPage />
    </Box>
  );
}

export default ProductFeature;
