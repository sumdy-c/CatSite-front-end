import { Box } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MainPageMenu = () => {
  const [focusrnt, setFocusrnt] = useState(0.2);
  const [focuswiki, setFocuswiki] = useState(0.2);
  const isMouseFocusWiki = () => {
    setFocuswiki(1);
  };
  const isMouseNoFocusWiki = () => {
    setFocuswiki(0.2);
  };
  const isMouseFocusRnt = () => {
    setFocusrnt(1);
  };
  const isMouseNoFocusRnt = () => {
    setFocusrnt(0.2);
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Link
        to="rntcat"
        style={{
          height: 600,
          width: "-webkit-fill-available",
          marginLeft: 0,
          marginRight: 0,
        }}
      >
        <Box
          onMouseOver={isMouseFocusRnt}
          onMouseOut={isMouseNoFocusRnt}
          style={{
            height: 600,
            width: "-webkit-fill-available",
            backgroundImage:
              "url(http://127.0.0.1:8887/imgMainMenu/RentCat.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: 1000,
            opacity: focusrnt,
          }}
        ></Box>

        <Box
          component="span"
          onMouseOver={isMouseFocusRnt}
          onMouseOut={isMouseNoFocusRnt}
          style={{
            position: "absolute",
            margin: 50,
            top: 313,
            left: 250,
            color: "black",
            fontSize: "-webkit-xxx-large",
            fontStyle: "italic",
            fontFamily: "fantasy",
          }}
        >
          АРЕНДОВАТЬ КОТИКА
        </Box>
      </Link>
      <Link
        to="catwiki"
        style={{
          height: 600,
          width: "-webkit-fill-available",
          marginLeft: 0,
          marginRight: 0,
        }}
      >
        <Box
          onMouseOver={isMouseFocusWiki}
          onMouseOut={isMouseNoFocusWiki}
          style={{
            height: 600,
            width: "-webkit-fill-available",
            backgroundImage:
              "url(http://127.0.0.1:8887/imgMainMenu/catwikibackgr.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: 1000,
            opacity: focuswiki,
          }}
        ></Box>
        <Box
          component="span"
          onMouseOver={isMouseFocusWiki}
          onMouseOut={isMouseNoFocusWiki}
          style={{
            position: "absolute",
            margin: 50,
            top: 313,
            right: 250,
            color: "black",
            fontSize: "-webkit-xxx-large",
            fontStyle: "italic",
            fontFamily: "fantasy",
          }}
        >
          КОТОПЕДИЯ
        </Box>
      </Link>
    </Box>
  );
};
export default MainPageMenu;
