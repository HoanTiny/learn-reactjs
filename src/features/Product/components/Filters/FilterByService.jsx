import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

FilterByService.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterByService({ filters = {}, onChange }) {
  console.log(12212121, filters);
  const handleChange = (e) => {
    if (!onChange) {
      return;
    }
    const { name, checked } = e.target;
    console.log(name);
    onChange({ [name]: checked });
  };

  return (
    <Box padding=" 16px" textAlign="left" borderTop={"1px solid #e9e9e9"}>
      <Typography variant="subtitle2" textAlign="left">
        Dịch vụ
      </Typography>

      <ul
        style={{
          listStyle: "none",
          paddingLeft: "0px",
        }}
      >
        {[
          { value: "isPromotion", label: "Có khuyến mãi" },
          { value: "isFreeShip", label: "Vận chuyển miễn phí" },
        ].map((service) => (
          <li key={service.value}>
            {filters[service]}
            <FormControlLabel
              control={
                <Checkbox
                  checked={Boolean(filters[service.value])}
                  onChange={handleChange}
                  name={service.value}
                  color="primary"
                />
              }
              label={service.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
