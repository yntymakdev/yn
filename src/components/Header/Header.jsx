import React, { useState } from "react";
import logo from "../../image/nike.png";
import { Avatar, Box, Menu, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Header = () => {
  const [newFeatured, setNewFeatured] = useState(false);
  // const [time, setTime] = useState(false);
  const [end, setEnd] = useState(200);
  const [end1, setEnd1] = useState(0);

  // console.log(end1);
  // IF();
  // function IF() {
  // if (end1) {
  //   return setTimeout(() => {
  //     setEnd1(1);
  //   }, 900);
  // } else {
  //   setTimeout(() => {
  //     setTime(false);
  //     setEnd(0);
  //   }, 0);
  // }
  // }

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const navLink = [
    "New & Featured",
    "Men",
    "Woman",
    "Kids",
    "Sale",
    "Customise",
    "SNKRS",
  ];
  return (
    <Box id="header">
      <Box className="container">
        <Box
          onMouseLeave={() => {
            setNewFeatured(false);
            setEnd1(0);
          }}
          style={{
            marginBottom: newFeatured ? "400px" : "",
            position: "absolute",
            position: "relative",
          }}
          className="header"
        >
          <Box className="block">
            <Avatar
              sx={{ width: "78.47px", height: "78.47px", p: 0, m: 0 }}
              alt="Nike"
              src={logo}
            />
            <Box
              // onMouseOver={() => {
              //   setNewFeatured(true);
              // }}
              className="header_nav"
            >
              {/* {navLink.map((el, index) => ( */}
              <Typography
                style={{
                  borderBottom: end1 === 1 ? "2px solid black" : "",
                }}
                onMouseOver={() => {
                  setEnd1(1);
                  setNewFeatured(true);
                }}
              >
                {navLink[0]}
              </Typography>
              <Typography
                style={{
                  borderBottom: end1 === 2 ? "2px solid black" : "",
                }}
                onMouseOver={() => {
                  setEnd1(2);
                  setNewFeatured(true);
                }}
              >
                {navLink[1]}
              </Typography>
              <Typography
                style={{
                  borderBottom: end1 === 3 ? "2px solid black" : "",
                }}
                onMouseOver={() => {
                  setEnd1(3);
                  setNewFeatured(true);
                }}
              >
                {navLink[2]}
              </Typography>
              <Typography
                style={{
                  borderBottom: end1 === 4 ? "2px solid black" : "",
                }}
                onMouseOver={() => {
                  setNewFeatured(true);
                  setEnd1(4);
                }}
              >
                {navLink[3]}
              </Typography>
              <Typography
                style={{
                  borderBottom: end1 === 5 ? "2px solid black" : "",
                }}
                onMouseOver={() => {
                  setEnd1(5);
                  setNewFeatured(true);
                }}
              >
                {navLink[4]}
              </Typography>
              <Typography
                style={{
                  borderBottom: end1 === 6 ? "2px solid black" : "",
                }}
                onMouseOver={() => {
                  setEnd1(6);
                  setNewFeatured(true);
                }}
              >
                {navLink[5]}
              </Typography>
              <Typography
                style={{
                  borderBottom: end1 === 7 ? "2px solid black" : "",
                }}
                onMouseLeave={() => {
                  setNewFeatured(false);
                  setEnd1(0);
                }}
                onMouseOver={() => {
                  setEnd1(7);
                  setNewFeatured(true);
                }}
              >
                {navLink[6]}
              </Typography>
              {/* ))} */}
            </Box>
            <Box className="header_icons">
              <Search sx={{ background: "#F5F5F5", borderRadius: "100px" }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <FavoriteBorderOutlinedIcon />
              <LocalMallOutlinedIcon />
            </Box>
          </Box>
          <h1
            // onMouseOver={() => {
            //   setEnd1(end1);
            // }}
            style={{
              display: end1 === 1 ? "block" : "none",
            }}
          >
            jhgfdfghjhgf
          </h1>
          <h1
            // onMouseOver={() => {
            //   setEnd1(2);
            // }}
            style={{
              display: end1 === 2 ? "block" : "none",
            }}
          >
            YNTY
          </h1>{" "}
          <h1
            // onMouseOver={() => {
            //   setEnd1(3);
            // }}
            style={{
              display: end1 === 3 ? "block" : "none",
            }}
          >
            sdfghjkl
          </h1>{" "}
          <h1
            // onMouseOver={() => {
            //   setEnd1(4);
            // }}
            style={{
              display: end1 === 4 ? "block" : "none",
            }}
          >
            sdfghjkl
          </h1>{" "}
          <h1
            // onMouseOver={() => {
            //   setEnd1(5);
            // }}
            style={{
              display: end1 === 5 ? "block" : "none",
            }}
          >
            sdfghjkl
          </h1>{" "}
          <h1
            // onMouseOver={() => {
            //   setEnd1(6);
            // }}
            style={{
              display: end1 === 6 ? "block" : "none",
            }}
          >
            sdfghjkl
          </h1>
          <h1
            // onMouseOver={() => {
            //   setEnd1(6);
            // }}
            style={{
              display: end1 === 7 ? "block" : "none",
            }}
          >
            YNTYMAK
          </h1>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
