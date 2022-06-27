import * as React from "react";
import { Paper } from "@mui/material";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import PrivateOffice from "./PrivateOffice/PrivateOffice.jsx";

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
        <span
          style={{
            marginTop: 10,
            marginLeft: 500,
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
