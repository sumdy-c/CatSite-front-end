import * as React from "react";
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
  funcEditCard,
  setTrackerEditID,
  trackerEditID,
  setImg,
  sendfile,
  img,
  setAvatar,
}) {
  //Стейты читающие форму
  const [name, setName] = React.useState("");
  const [breed, setbreed] = React.useState("");
  const [color, setColor] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [info, setinfo] = React.useState("");
  const [age, setAge] = React.useState("");

  // Обработчики отправки формы и функция собирающая массив данных
  const handleClose = () => {
    setTrackerEditID(1);
    setOpen("");
    setAvatar(null);
  };
  const handleConfirm = () => {
    if (open === "addCat") {
      if (validExamination()) {
        setOpen("");
        newCat(accessForm());
        setAvatar(null);
      }
    }
    if (open === "editCat") {
      if (validExamination()) {
        setOpen("");
        funcEditCard(trackerEditID, accessForm());
        setTrackerEditID(1);
        setAvatar(null);
      }
    }
  };

  const accessForm = () => {
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
    setbreed("");
    setColor("");
    return data;
  };

  // Обработчики чтения формы
  const handlerChangeAge = (event) => {
    setAge(event.target.value.replace(/\b0+/g, ""));
    validExamination();
  };
  const handlerCatName = (event) => {
    setName(event.target.value);
    validExamination();
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value.replace(/\b0+/g, ""));
    validExamination();
  };
  const handleChangeInfo = (event) => {
    setinfo(event.target.value);
    validExamination();
  };
  const handleChangebreed = (event) => {
    setbreed(event.target.value);
    validExamination();
  };
  const handleChangeColor = (event) => {
    setColor(event.target.value);
    validExamination();
  };
  //правила валидации
  const validExamination = () => {
    const state =
      validSetting.name === false &&
      validSetting.breed === false &&
      validSetting.color === false &&
      validSetting.price === false &&
      validSetting.age === false;
    return state;
  };

  const validSetting = {
    name: name.length >= 20 || name === "",
    price:
      isNaN(price) ||
      price <= 100 ||
      price >= 2001 ||
      price === RegExp(/^0+/, ""),
    color: color === "",
    breed: breed === "",
    age: isNaN(age) || age > 26 || age <= 0 || age === RegExp(/^0+/, ""),
  };

  // выбор титульника
  let title =
    open === "addCat" ? "Добавление котика" : "Изменение информации о котике";
  let dialogContent =
    open === "editCat"
      ? "Пожалуйста укажите всю информацию о вашем питомце"
      : "Обращаем ваше внимание, изменения в карточке котика отменить нельзя!";
  const isDialogOpen = open === "addCat" || open === "editCat";

  return (
    <>
      <Dialog open={isDialogOpen} onClose={handleClose}>
        <DialogTitle>{`${title}`}</DialogTitle>
        <DialogContent>
          <DialogContentText>{`${dialogContent}`}</DialogContentText>

          <TextField
            error={validSetting.name}
            id="NameAddExamination"
            style={{ paddingTop: 10, paddingBottom: 10 }}
            autoFocus
            helperText={
              validSetting.name
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

          <Box
            sx={{ minWidth: 90 }}
            style={{ paddingTop: 10, paddingBottom: 10 }}
          >
            <FormControl
              variant="standard"
              sx={{
                width: "-webkit-fill-available",
              }}
            >
              <InputLabel id="demo-simple-select-label">
                Укажите породу котика!
              </InputLabel>
              <Select
                error={validSetting.breed}
                value={breed}
                label="breed"
                onChange={handleChangebreed}
                id="breedAddExamination"
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
            error={validSetting.age}
            helperText={
              validSetting.age
                ? "Только числа! Не более 25 лет!!! Обязательно для заполнения!"
                : ""
            }
            style={{ paddingTop: 10, paddingBottom: 10 }}
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
            <FormControl
              variant="standard"
              sx={{
                width: "-webkit-fill-available",
              }}
            >
              <InputLabel id="demo-simple-select-label">
                Укажите цвет котика
              </InputLabel>
              <Select
                error={validSetting.color}
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
            error={validSetting.price}
            helperText={
              validSetting.price
                ? "Не менее 100 и не более 2000 рублей! Обязательно для заполнения!!"
                : ""
            }
            id="PriceAddExamination"
            style={{ paddingTop: 10, paddingBottom: 10 }}
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
            id="TextAddExamination"
            aria-label="ДопИнфКот"
            onChange={handleChangeInfo}
            placeholder="Дополнительная информация о котике (Это поле не обязательно для заполнения)"
            style={{ width: 550, height: 109, marginTop: 30 }}
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
