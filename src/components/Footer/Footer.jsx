import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  const storeArr = ["jjheaded", ""];
  return (
    <Box id="footer">
      <Box className="container">
        <Box className="footer">
          <Box className="footer_text">
            <Typography>Find A Store</Typography>
            <List>
              {storeArr.map((el, index) => (
                <ListItem key={index}>{el}</ListItem>
              ))}
            </List>
            <Box>
              <Typography>more</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
