import { Box } from "@mui/material";
import React from "react";

const ProductCard = () => {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <Box
            sx={{ width: "287px", height: "287px", background: "gray" }}
          ></Box>
          <Box
            sx={{ width: "287px", height: "287px", background: "gray" }}
          ></Box>
          <Box
            sx={{ width: "287px", height: "287px", background: "gray" }}
          ></Box>
          <Box
            sx={{ width: "287px", height: "287px", background: "gray" }}
          ></Box>
          <Box
            sx={{ width: "287px", height: "287px", background: "gray" }}
          ></Box>
          <Box
            sx={{ width: "287px", height: "287px", background: "gray" }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
