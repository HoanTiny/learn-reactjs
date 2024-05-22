import React from "react";
import PropTypes from "prop-types";
import { Box, FormControlLabel, Typography } from "@mui/material";
import { CheckBox } from "@mui/icons-material";

FilterByService.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterByService({ filters = {}, onChange }) {
  console.log(filters);
  const handleChange = (e) => {
    const { name, checked } = e.target;
    onChange({ [name]: checked });
  };

  return (
    <Box padding=" 16px" textAlign="left" borderTop={"1px solid #e9e9e9"}>
      <Typography variant="subtitle2" textAlign="left">
        Dịch vụ
      </Typography>

      <ul>
        {["isPromotion", "isFreeShip"].map((service, index) => (
          <li key={index}>
            <FormControlLabel
              control={
                <CheckBox
                  checked={filters[service]}
                  onChange={handleChange}
                  name={service}
                  color="primary"
                />
              }
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
