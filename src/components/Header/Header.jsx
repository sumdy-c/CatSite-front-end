import style from "./Header.module.css";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import * as React from "react";
import { ButtonGroup } from "@mui/material";

export default function Header({ isOpen, setBooked }) {
  const [variantAll, setVariantAll] = React.useState("contained");
  const [variantBooked, setVariantBooked] = React.useState("text");
  const [variantFree, setVariantFree] = React.useState("text");

  const handleClickOpen = () => {
    isOpen(1);
  };
  const VisibleBookedCat = () => {
    setBooked("booked");
    setVariantAll("text");
    setVariantBooked("contained");
    setVariantFree("text");
  };
  const VisibleAllCat = () => {
    setBooked("all");
    setVariantAll("contained");
    setVariantBooked("text");
    setVariantFree("text");
  };
  const VisibleFreeBookedCat = () => {
    setBooked("free");
    setVariantAll("text");
    setVariantBooked("text");
    setVariantFree("contained");
  };

  return (
    <>
      <Paper elevation={8} className={`${style.wrapperTop}`}>
        <Button size="large" onClick={handleClickOpen}>
          Добавить своего котика!
        </Button>
        <span className={`${style.titleName}`}> 🆃🅷🅴 | 🅼🅴🅾🆆 | 🆂🅷🅾🅿 </span>
        <ButtonGroup disableElevation variant={`${variantFree}`}>
          <Button onClick={VisibleFreeBookedCat}>
            Досупные для бронирования
          </Button>
          <Button variant={`${variantAll}`} onClick={VisibleAllCat}>
            Все котики
          </Button>
          <Button variant={`${variantBooked}`} onClick={VisibleBookedCat}>
            Забронированные котики
          </Button>
        </ButtonGroup>
      </Paper>
    </>
  );
}
