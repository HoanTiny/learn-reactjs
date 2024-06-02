import React from "react";
// import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

ProductMenu.propTypes = {};

function ProductMenu(props) {
  return (
    <Box
      component="ul"
      sx={{
        padding: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        listStyle: "none",

        "& > li": {
          padding: "16px 32px",
        },

        "& > li > a": {
          color: "#aeaeae",
          textDecoration: "none",
        },

        "& > li > a.active": {
          color: "#f60000",
          textDecoration: "underline",
          fontWeight: "bold",
        },
      }}
    >
      <li>
        <NavLink to="description">Description</NavLink>
      </li>

      <li>
        <NavLink to="additional">Additional Infomation</NavLink>
      </li>

      <li>
        <NavLink to="reviews">Reviews</NavLink>
      </li>
    </Box>
  );
}

export default ProductMenu;
