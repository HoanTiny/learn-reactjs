import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import FilterByCategory from "./Filters/FilterByCategory";
import FilterPrice from "./Filters/FilterPrice";
import FilterByService from "./Filters/FilterByService";

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      "category.id": newCategoryId,
    };
    onChange(newFilters);
  };

  const handlePriceChange = (values) => {
    if (onChange) {
      onChange(values);
    }
  };

  return (
    <Box padding="12px 6px">
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterPrice onChange={handlePriceChange} />
      <FilterByService onChange={handlePriceChange} filters={filters} />
    </Box>
  );
}

export default ProductFilters;
