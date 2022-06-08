import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import * as React from "react";
import { ButtonGroup } from "@mui/material";

export default function Header({ isOpen, setbooked }) {
  const [variantAll, setVariantAll] = React.useState("contained");
  const [variantbooked, setVariantbooked] = React.useState("text");
  const [variantFree, setVariantFree] = React.useState("text");

  const handleClickOpen = () => {
    isOpen("addCat");
  };
  const VisiblebookedCat = () => {
    setbooked("booked");
    setVariantAll("text");
    setVariantbooked("contained");
    setVariantFree("text");
  };
  const VisibleAllCat = () => {
    setbooked("all");
    setVariantAll("contained");
    setVariantbooked("text");
    setVariantFree("text");
  };
  const VisibleFreebookedCat = () => {
    setbooked("free");
    setVariantAll("text");
    setVariantbooked("text");
    setVariantFree("contained");
  };

  return (
    <>
      <Paper
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
        <Button size="large" onClick={handleClickOpen}>
          Добавить своего котика!
        </Button>
        <span style={{ marginLeft: 305 }}>🆃🅷🅴 | 🅼🅴🅾🆆 | 🆂🅷🅾🅿</span>
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
    </>
  );
}
