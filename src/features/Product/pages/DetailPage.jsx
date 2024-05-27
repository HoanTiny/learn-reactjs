import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid, Paper } from "@mui/material";

DetailPage.propTypes = {};

function DetailPage(props) {
  return (
    <Box>
      <Container>
        <Paper elevation={0}>
          <Grid item></Grid>
          <Grid item></Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default DetailPage;
