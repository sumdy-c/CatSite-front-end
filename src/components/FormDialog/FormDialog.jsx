import * as React from "react";
import "./FormDialog.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { TextareaAutosize } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import UploadPhoto from "./UploadPhoto.jsx";
import { breedData } from "../../constants/breedData";

import { colorData } from "../../constants/colorData";

export default function FormDialog({
  newCat,
  open,
  setOpen,
  FuncEditCard,
  setTrackerEditID,
  trackerEditID,
  setImg,
  sendfile,
  img,
  setAvatar,
}) {
  const handleClose = () => {
    setTrackerEditID(1);
    setOpen(-0);
    setAvatar(null);
  };

  const handleConfirm = () => {
    if (open === 1) {
      if (ValidExamination()) {
        setOpen(-0);
        newCat(AccsessForm());
        setAvatar(null);
      }
    }
    if (open === 2) {
      if (ValidExamination()) {
        setOpen(-0);
        FuncEditCard(trackerEditID, AccsessEditForm());
        setTrackerEditID(1);
        setAvatar(null);
      }
    }
  };

  const [name, setName] = React.useState("");
  const [breed, setBreed] = React.useState("");
  const [color, setColor] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [info, setinfo] = React.useState("");
  const [age, setAge] = React.useState("");

  const ValidExamination = () => {
    const state =
      ValidSetting.Name === false &&
      ValidSetting.Breed === false &&
      ValidSetting.Color === false &&
      ValidSetting.Price === false &&
      ValidSetting.Age === false;
    return state;
  };

  const handlerChangeAge = (event) => {
    setAge(event.target.value.replace(/\b0+/g, ""));
    ValidExamination();
  };

  const handlerCatName = (event) => {
    setName(event.target.value);
    ValidExamination();
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value.replace(/\b0+/g, ""));
    ValidExamination();
  };
  const handleChangeInfo = (event) => {
    setinfo(event.target.value);
    ValidExamination();
  };

  const handleChangeBreed = (event) => {
    setBreed(event.target.value);
    ValidExamination();
  };

  const handleChangeColor = (event) => {
    setColor(event.target.value);
    ValidExamination();
  };

  const ValidSetting = {
    Name: name.length >= 20 || name === "",
    Price:
      isNaN(price) ||
      price <= 100 ||
      price >= 2001 ||
      price === RegExp(/^0+/, ""),
    Color: color === "",
    Breed: breed === "",
    Age: isNaN(age) || age > 26 || age <= 0 || age === RegExp(/^0+/, ""),
  };

  const AccsessEditForm = () => {
    let data = {
      name: name,
      breed: breed,
      age: age,
      color: color,
      price: price,
      info: info,
    };
    setAge("");
    setName("");
    setPrice("");
    setinfo("");
    setBreed("");
    setColor("");
    return data;
  };

  const AccsessForm = () => {
    let data = {
      name: name,
      breed: breed,
      age: age,
      color: color,
      price: price,
      info: info,
    };
    setAge("");
    setName("");
    setPrice("");
    setinfo("");
    setBreed("");
    setColor("");
    return data;
  };

  let title =
    open === 1 ? "Добавление котика" : "Изменение информации о котике";
  let dialogContent =
    open === 1
      ? "Пожалуйста укажите всю информацию о вашем питомце"
      : "Обращаем ваше внимание, изменения в карточке котика отменить нельзя!";

  return (
    <>
      <Dialog open={Boolean(open)} onClose={handleClose}>
        <DialogTitle>{`${title}`}</DialogTitle>
        <DialogContent>
          <DialogContentText>{`${dialogContent}`}</DialogContentText>

          <TextField
            error={ValidSetting.Name}
            id="NameAddExamination"
            className="tabs"
            autoFocus
            helperText={
              ValidSetting.Name
                ? "Не более 20 символов! Обязательно для заполнения!"
                : ""
            }
            margin="dense"
            label="Кличка вашего питомца"
            type="text"
            onChange={handlerCatName}
            fullWidth
            variant="standard"
            aria-describedby="component-error-text"
          />

          <Box sx={{ minWidth: 90 }} className="tabs">
            <FormControl variant="standard" className="fieldList">
              <InputLabel id="demo-simple-select-label">
                Укажите породу котика!
              </InputLabel>
              <Select
                error={ValidSetting.Breed}
                value={breed}
                label="Breed"
                onChange={handleChangeBreed}
                id="BreedAddExamination"
              >
                <MenuItem id="default" disabled value={""} autoFocus>
                  Укажите породу котика!
                </MenuItem>
                {breedData.map((elem, id) => (
                  <MenuItem key={id} value={elem.name}>
                    {elem.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <TextField
            error={ValidSetting.Age}
            helperText={
              ValidSetting.Age
                ? "Только числа! Не более 25 лет!!! Обязательно для заполнения!"
                : ""
            }
            className="tabs"
            autoFocus
            margin="dense"
            label="Возраст котика"
            type="text"
            onChange={handlerChangeAge}
            fullWidth
            variant="standard"
            id="AgeAddExamination"
          />
          <Box sx={{ minWidth: 120 }}>
            <FormControl variant="standard" className="fieldList">
              <InputLabel id="demo-simple-select-label">
                Укажите цвет котика
              </InputLabel>
              <Select
                error={ValidSetting.Color}
                value={color}
                autoComplete="color1"
                label="dsf"
                onChange={handleChangeColor}
                id="AgeColorExamination"
              >
                <MenuItem disabled id="default" value={""} autoFocus>
                  Укажите цвет котика
                </MenuItem>
                {colorData.map((elem, id) => (
                  <MenuItem key={id} value={elem.name}>
                    {elem.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <TextField
            error={ValidSetting.Price}
            helperText={
              ValidSetting.Price
                ? "Не менее 100 и не более 2000 рублей! Обязательно для заполнения!!"
                : ""
            }
            id="PriceAddExamination"
            className="tabs"
            autoFocus
            margin="dense"
            label="Стоймость аренды котика"
            type="text"
            onChange={handleChangePrice}
            fullWidth
            variant="standard"
          />
          <UploadPhoto setImg={setImg} sendfile={sendfile} img={img} />
          <TextareaAutosize
            className="textarea"
            id="TextAddExamination"
            aria-label="ДопИнфКот"
            onChange={handleChangeInfo}
            placeholder="Дополнительная информация о котике (Это поле не обязательно для заполнения)"
            style={{ width: 550, height: 109 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}> Закрыть окно </Button>
          <Button onClick={handleConfirm}>Подтвердить!</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
