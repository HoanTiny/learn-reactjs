import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, TextField, Typography } from "@mui/material";

FilterPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterPrice({ onChange }) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (onChange) {
      onChange(values);
    }
  };
  return (
    <Box padding=" 16px" textAlign="left" borderTop={"1px solid #e9e9e9"}>
      <Typography variant="subtitle2" textAlign="left">
        CHỌN KHOẢNG GIÁ
      </Typography>

      <Box display="flex" gap="10px" mb={1}>
        <TextField
          name="salePrice_gte"
          variant="standard"
          value={values.salePrice_gte}
          onChange={handleChange}
        />
        <span>-</span>
        <TextField
          name="salePrice_lte"
          onChange={handleChange}
          variant="standard"
        />
      </Box>

      <Button
        variant="outlined"
        color="primary"
        onClick={handleSubmit}
        size="small"
      >
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterPrice;
