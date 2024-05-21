import { Box, Container, Grid, Paper } from "@mui/material";
import React from "react";

ProductListPage.propTypes = {};

function ProductListPage(props) {
  return (
    <div>
      <Box>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Paper elevation={0}> Left Column</Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper elevation={1}>Right Column</Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default ProductListPage;
