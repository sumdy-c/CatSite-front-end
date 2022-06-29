import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import * as React from "react";
import { ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

export default function SettingPanelCat({ isOpen, setBooked }) {
  const [variantAll, setVariantAll] = React.useState("contained");
  const [variantbooked, setVariantbooked] = React.useState("text");
  const [variantFree, setVariantFree] = React.useState("text");

  const handleClickOpen = () => {
    isOpen("addCat");
  };

  const VisiblebookedCat = () => {
    setBooked("booked");
    setVariantAll("text");
    setVariantbooked("contained");
    setVariantFree("text");
  };
  const VisibleAllCat = () => {
    setBooked("all");
    setVariantAll("contained");
    setVariantbooked("text");
    setVariantFree("text");
  };
  const VisibleFreebookedCat = () => {
    setBooked("free");
    setVariantAll("text");
    setVariantbooked("text");
    setVariantFree("contained");
  };

  const listAnimate = {
    hidden: {
      x: -100,
    },
    visible: {
      x: 0,
    },
  };

  return (
    <Paper
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      variants={listAnimate}
      elevation={8}
      style={{
        display: "flex",
        margin: 15,
        padding: 2,
        height: "max-content",
        width: "-webkit-fill-available",
        position: "static",
        flexWrap: "wrap",
        marginTop: 0,
        alignContent: "space-between",
        justifyContent: "space-between",
      }}
    >
      <Button variant="contained" size="large" onClick={handleClickOpen}>
        Добавить своего котика!
      </Button>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button size="large">Вернуться на главную страницу</Button>
      </Link>
      <Box component="span" style={{ marginLeft: 10 }}>
        🆃🅷🅴 | 🅼🅴🅾🆆 | 🆂🅷🅾🅿
      </Box>
      <ButtonGroup disableElevation variant={`${variantFree}`}>
        <Button onClick={VisibleFreebookedCat}>
          Досупные для бронирования
        </Button>
        <Button variant={`${variantAll}`} onClick={VisibleAllCat}>
          Все котики
        </Button>
        <Button variant={`${variantbooked}`} onClick={VisiblebookedCat}>
          Забронированные котики
        </Button>
      </ButtonGroup>
    </Paper>
  );
}
