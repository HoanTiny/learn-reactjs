import { Paper } from "@mui/material";
import React from "react";
import { useOutletContext } from "react-router-dom";
import DOMPurify from "dompurify";
ProductDescription.propTypes = {};

function ProductDescription(props) {
  props = useOutletContext();
  const safeDescription = DOMPurify.sanitize(props.description);

  return (
    <Paper elevation={0} sx={{ padding: "12px" }}>
      <div dangerouslySetInnerHTML={{ __html: safeDescription }} />
    </Paper>
  );
}

export default ProductDescription;
