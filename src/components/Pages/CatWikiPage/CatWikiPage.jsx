import { Button, Paper } from "@mui/material";
import * as React from "react";
import { dataWikiCat } from "../../../constants/dataWikiCat.js";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

const CatWiki = () => {
  return (
    <>
      <Paper
        style={{
          display: "flex",
          height: "max-content",
          width: "max-content",
          marginBottom: 15,
          justifyContent: "center",
          alignContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Box
          component="span"
          style={{
            marginTop: 10,
            fontSize: "-webkit-xxx-large",
            fontFamily: "fantasy",
            color: "black",
          }}
        >
          ~ КОТОПЕДИЯ ~
        </Box>
      </Paper>

      <Link to="/" style={{ marginLeft: 50, textDecoration: "none" }}>
        <Button variant="contained">
          <p>Вернуться на главную страницу</p>
        </Button>
      </Link>
      {dataWikiCat.map((elem, key) => (
        <Paper
          key={key}
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 15,
            marginBottom: 10,
          }}
        >
          <Box>
            <img src={`${elem.img}`} alt="FOTO" />
          </Box>
          <Box>
            <Box
              component="span"
              style={{
                display: "inline-block",
                margin: 10,
                fontFamily: "fantasy",
                fontSize: "x-large",
              }}
            >
              {elem.name}
            </Box>
            <br />
            <Box component="span">{elem.description}</Box>
          </Box>
        </Paper>
      ))}
    </>
  );
};

export default CatWiki;
