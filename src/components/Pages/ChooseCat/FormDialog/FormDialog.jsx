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
import { breedData } from "../../../../constants/breedData.js";
import { colorData } from "../../../../constants/colorData";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { useToggleTitle } from "./toggleTitle.js";
import { sendForm } from "./sendForm.js";

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
  const [vaild, setValid] = useState({});
  const handleClose = () => {
    setTrackerEditID(1);
    setOpen("");
    setAvatar(null);
    reset();
  };
  const { control, reset, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      breed: "",
      age: "",
      color: "",
      price: "",
      info: "",
    },
  });
  const { title, dialogContent, isDialogOpen } = useToggleTitle(open);

  return (
    <Dialog open={isDialogOpen} onClose={handleClose}>
      <form
        onSubmit={handleSubmit((data) => {
          sendForm(
            data,
            open,
            funcEditCard,
            handleClose,
            newCat,
            setValid,
            trackerEditID
          );
        })}
      >
        <DialogTitle>{`${title}`}</DialogTitle>
        <DialogContent>
          <DialogContentText>{`${dialogContent}`}</DialogContentText>
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                error={vaild.name}
                style={{ paddingTop: 10, paddingBottom: 10 }}
                autoFocus
                helperText={
                  vaild.name
                    ? "Не более 20 символов! Обязательно для заполнения!"
                    : ""
                }
                margin="dense"
                label="Кличка вашего питомца"
                type="text"
                onChange={onChange}
                value={value}
                fullWidth
                variant="standard"
              />
            )}
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
              <InputLabel>Укажите породу котика!</InputLabel>
              <Controller
                name="breed"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    error={vaild.breed}
                    value={value}
                    label="breed"
                    onChange={onChange}
                  >
                    <MenuItem disabled value={""} autoFocus>
                      Укажите породу котика!
                    </MenuItem>
                    {breedData.map((elem, key) => (
                      <MenuItem key={key} value={elem.name}>
                        {elem.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>
          </Box>
          <Controller
            name="age"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                error={vaild.age}
                helperText={
                  vaild.age
                    ? "Только числа! Не более 25 лет!!! Обязательно для заполнения!"
                    : ""
                }
                style={{ paddingTop: 10, paddingBottom: 10 }}
                autoFocus
                margin="dense"
                label="Возраст котика"
                type="text"
                value={value}
                onChange={onChange}
                fullWidth
                variant="standard"
              />
            )}
          />
          <Box sx={{ minWidth: 120 }}>
            <FormControl
              variant="standard"
              sx={{
                width: "-webkit-fill-available",
              }}
            >
              <InputLabel>Укажите цвет котика</InputLabel>
              <Controller
                name="color"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    error={vaild.color}
                    value={value}
                    autoComplete="color1"
                    label="dsf"
                    onChange={onChange}
                  >
                    <MenuItem disabled value={""} autoFocus>
                      Укажите цвет котика
                    </MenuItem>
                    {colorData.map((elem, key) => (
                      <MenuItem key={key} value={elem.name}>
                        {elem.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>
          </Box>
          <Controller
            name="price"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                error={vaild.price}
                helperText={
                  vaild.price
                    ? "Не менее 100 и не более 2000 рублей! Обязательно для заполнения!!"
                    : ""
                }
                style={{ paddingTop: 10, paddingBottom: 10 }}
                autoFocus
                margin="dense"
                label="Стоймость аренды котика"
                type="text"
                onChange={onChange}
                value={value}
                fullWidth
                variant="standard"
              />
            )}
          />
          <UploadPhoto setImg={setImg} sendfile={sendfile} img={img} />
          <Controller
            name="info"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextareaAutosize
                value={value}
                onChange={onChange}
                placeholder="Дополнительная информация о котике (Это поле не обязательно для заполнения)"
                style={{ width: 550, height: 109, marginTop: 30 }}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}> Закрыть окно </Button>
          <Button type="submit">Подтвердить!</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
