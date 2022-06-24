import { Button, Paper } from "@mui/material";
import * as React from "react";
import { dataWikiCat } from "../../../constants/dataWikiCat.js";
import { Link } from "react-router-dom";

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
        <span
          style={{
            marginTop: 10,
            fontSize: "-webkit-xxx-large",
            fontFamily: "fantasy",
            color: "black",
          }}
        >
          ~ КОТОПЕДИЯ ~
        </span>
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
          <div>
            <img src={`${elem.img}`} alt="FOTO" />
          </div>
          <div>
            <span
              style={{
                display: "inline-block",
                margin: 10,
                fontFamily: "fantasy",
                fontSize: "x-large",
              }}
            >
              {elem.name}
            </span>
            <br />
            <span>{elem.description}</span>
          </div>
        </Paper>
      ))}
    </>
  );
};

export default CatWiki;
