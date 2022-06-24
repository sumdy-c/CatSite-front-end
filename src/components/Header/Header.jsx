import * as React from "react";
import { Paper } from "@mui/material";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

const Header = () => {
  return (
    <>
      <Paper
        style={{
          display: "flex",
          height: "max-content",
          width: "-webkit-fill-available",
          marginBottom: 15,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <span
          style={{
            marginTop: 10,
            fontSize: "-webkit-xxx-large",
            fontStyle: "italic",
            fontFamily: "fantasy",
            color: "black",
          }}
        >
          THE MEOW SHOP
        </span>
      </Paper>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
