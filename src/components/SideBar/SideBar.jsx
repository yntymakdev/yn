import React, { useState } from "react";
import "./SideBar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  List,
  ListItem,
  Typography,
} from "@mui/material";
const SideBar = () => {
  const shoesArr = [
    "Lifestyle",
    "Jordan",
    "Basketball",
    "Training & Gym",
    "Football",
    "Skateboarding",
    "Golf",
    "Nike By You",
    "Boots",
    "Tennis",
    "Athletics",
    "Sandals, Slides & Flip Flops",
  ];

  const [bio, setBio] = useState(false);

  const more = (text) => {
    if (bio === "Hello") {
      setBio(text.length);
    } else {
      setBio("Hello");
    }
  };

  const genderArr = ["Men", "Women", "Unisex"];
  const sizeArr = [
    1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10,
    10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17,
  ];
  return (
    <Box id="side_bar">
      <Box className="container">
        <Box className="side_bar">
          <Box sx={{ padding: "20px 0 40px 0" }}>
            <List>
              {shoesArr.map((i, index) => (
                <ListItem key={index}>{i}</ListItem>
              ))}
            </List>
          </Box>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid rgb(192, 192, 192)",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "7px 0",
                }}
              >
                Gender
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {genderArr.map((i, index) => (
                <ListItem key={index} sx={{ fontSize: "13px", p: 0, m: 0 }}>
                  <Checkbox sx={{ p: "10px 0", m: "0 10px 0 0" }} />
                  {i}
                </ListItem>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid rgb(192, 192, 192)",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "7px 0",
                }}
              >
                Size
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {sizeArr.slice(0, bio).map((i, index) => (
                <Button
                  sx={{
                    border: "1.5px solid #CACACB",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                  key={index}
                >
                  {i}
                </Button>
              ))}
              <h5
                onClick={() => {
                  more(sizeArr);
                }}
              >
                {bio === "Hello" ? "Читать еще" : "Закрыть"}
              </h5>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
