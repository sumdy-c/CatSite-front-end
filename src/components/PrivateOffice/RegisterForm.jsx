import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm, Controller } from "react-hook-form";
import getInfoUser from "./GetDataAccount.js";
import axios from "axios";

export default function RegisterForm() {
  const [openReg, setOpenReg] = React.useState(false);
  const [valid, setValid] = React.useState(false);

  const { control, reset, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      password: "",
      confirmPass: "",
      email: "",
    },
  });

  const validNewName = (name) => {
    debugger;
    let data;
    let val = false;
    axios
      .get("http://localhost:3001/users")
      .then((res) => {
        data = res.data;
        data.forEach((item) => {
          console.log(name);
          if (name === item.name) {
            val = false;
          } else {
            val = true;
          }
        });
        return val;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickOpen = () => {
    setOpenReg(true);
    reset();
  };

  const handleClose = () => {
    setOpenReg(false);
    reset();
  };

  const onSubmit = async (data) => {
    if (
      validateEmail(data.email) &&
      validatePass(data.password, data.confirmPass)
      // validNewName(data.firstName)
    ) {
      handleClose();
      setValid(false);
      getInfoUser(data.firstName, data.password, data.email);
      reset();
    } else {
      setValid(true);
      console.log("Тут ошибка!");
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePass = (pass, confirmPass) => {
    if (pass.length < 6 || !pass.match(/^\s*(\w+)\s*$/)) {
      return false;
    } else {
      return pass === confirmPass ? true : false;
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        style={{ margin: 5 }}
      >
        Зарегистрироваться
      </Button>
      <Dialog open={openReg} onClose={handleClose}>
        <DialogTitle>Регистрация</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <DialogContentText>
              Дорогие друзья, будьте внимательны при заполнении формы
              регистрации!
            </DialogContentText>
            <Controller
              name="firstName"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Имя пользователя (можно псевдоним)"
                  variant="filled"
                  onChange={onChange}
                  value={value}
                  style={{ width: 550 }}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Пароль для входа в аккаунт"
                  type={"password"}
                  error={valid}
                  variant="filled"
                  onChange={onChange}
                  value={value}
                  style={{ width: 550 }}
                />
              )}
            />
            <div>
              <Controller
                name="confirmPass"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    error={valid}
                    label="Повторите пароль"
                    variant="filled"
                    type={"password"}
                    onChange={onChange}
                    value={value}
                    style={{ width: 550 }}
                  />
                )}
              />
              {valid ? (
                <p style={{ color: "red" }}>
                  Пароли должны совпадать! Используйте только латиницу, цифры и
                  символы - [ / , ? , ! , $ , @ , % , ^ , * , ) , ( ]
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <Controller
                name="email"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    label="Укажите свою электронную почту"
                    error={valid}
                    variant="filled"
                    onChange={onChange}
                    value={value}
                    style={{ width: 550 }}
                  />
                )}
              />
              {valid ? (
                <p style={{ color: "red" }}>
                  Проверьте корректность ввода электронной почты! Возможно такое
                  имя аккаунта уже существует!!!
                </p>
              ) : (
                ""
              )}
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Закрыть</Button>
            <Button type="submit" variant="contained">
              Регистрация
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
