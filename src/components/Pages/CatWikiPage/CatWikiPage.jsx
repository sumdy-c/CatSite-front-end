import { Button, Paper } from "@mui/material";
import * as React from "react";
import { dataWikiCat } from "../../../constants/dataWikiCat.js";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { Link } from "react-scroll";

const CatWiki = () => {
  const navigate = useNavigate();
  const goMain = () => {
    navigate("/", { replace: true });
  };
  return (
    <>
      <label className="start" />
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

      <Button
        variant="contained"
        style={{ marginLeft: 25, marginBottom: 15 }}
        onClick={goMain}
      >
        <Box component="p">Вернуться на главную страницу</Box>
      </Button>

      <Link
        activeClass="active"
        to="start"
        spy={true}
        smooth={true}
        offset={-500}
        duration={500}
      >
        <Button
          variant="contained"
          style={{ position: "fixed", right: 30, bottom: "10%", width: 150 }}
        >
          В начало
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
