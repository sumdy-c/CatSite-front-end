import * as React from "react";
import { Paper } from "@mui/material";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import PrivateOffice from "./PrivateOffice/PrivateOffice.jsx";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <>
      <Paper
        style={{
          display: "flex",
          height: "max-content",
          width: "-webkit-fill-available",
          marginBottom: 15,
          justifyContent: "flex-start",
          alignContent: "center",
        }}
      >
        <PrivateOffice />
        <Box
          component="span"
          style={{
            marginTop: 40,
            marginLeft: 300,
            fontSize: "-webkit-xxx-large",
            fontStyle: "italic",
            fontFamily: "fantasy",
            color: "black",
          }}
        >
          THE MEOW SHOP
        </Box>
      </Paper>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
