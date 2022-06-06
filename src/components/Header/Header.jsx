import style from "./Header.module.css";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import * as React from "react";
import { ButtonGroup } from "@mui/material";

export default function Header({ isOpen, setBooked }) {
  const handleClickOpen = () => {
    isOpen(1);
  };
  const VisibleBookedCat = () => {
    setBooked("booked");
  };
  const VisibleAllCat = () => {
    setBooked("all");
  };
  const VisibleFreeBookedCat = () => {
    setBooked("free");
  };

  return (
    <>
      <Paper elevation={8} className={`${style.wrapperTop}`}>
        <Button size="large" onClick={handleClickOpen}>
          Добавить своего котика!
        </Button>
        <span className={`${style.titleName}`}> 🆃🅷🅴 | 🅼🅴🅾🆆 | 🆂🅷🅾🅿 </span>
        <ButtonGroup disableElevation variant="text">
          <Button onClick={VisibleFreeBookedCat}>
            Досупные для бронирования
          </Button>
          <Button onClick={VisibleAllCat}>Все котики</Button>
          <Button onClick={VisibleBookedCat}>Забронированные котики</Button>
        </ButtonGroup>
      </Paper>
    </>
  );
}
