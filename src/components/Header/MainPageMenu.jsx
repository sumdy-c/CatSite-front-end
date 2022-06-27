import * as React from "react";
import { Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Paper style={{ height: 600, width: "-webkit-fill-available" }}>
      Арендуй своего любимца!
      <Link to="rntcat">
        <Button> АРЕНДОВАТЬ КОТА </Button>
      </Link>
    </Paper>
  );
};

export default Header;
