import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import categoryApi from "../../../../api/categoryApi";
import "./filtercategory.scss";
FilterByCategory.propTypes = {
  onChange: PropTypes.func,
  // filters: PropTypes.object.isRequired,
};

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        // Call API
        const response = await categoryApi.getAll();
        setCategoryList(response);
      } catch (error) {
        console.log("Failed to fetch category list: ", error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };
  return (
    <Box padding="0 16px">
      <Typography variant="subtitle2" textAlign="left">
        DANH MỤC SẢN PHẨM
      </Typography>
      <ul className="category-list">
        {categoryList.map((category) => (
          <li
            key={category.id}
            className="category-item"
            onClick={() => handleCategoryClick(category)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
