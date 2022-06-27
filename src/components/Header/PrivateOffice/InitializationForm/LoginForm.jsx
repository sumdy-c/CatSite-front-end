import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm, Controller } from "react-hook-form";

export default function LoginForm({ LoginUser, correctData, setCorrectData }) {
  const [openLogin, setOpenLogin] = React.useState(false);
  const { control, reset, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      password: "",
    },
  });

  const handleClickOpen = () => {
    setOpenLogin(true);
    reset();
  };

  const handleClose = () => {
    setOpenLogin(false);
    reset();
  };

  const onSubmit = (data) => {
    LoginUser(data);
    if (correctData === "Correct") {
      handleClose();
      reset();
      setCorrectData(null);
    } else {
      reset();
      setTimeout(() => {
        setCorrectData(null);
      }, 4000);
    }
  };

  return (
    <>
      <Button variant="text" onClick={handleClickOpen} style={{ margin: 5 }}>
        Войти в личный кабинет
      </Button>
      <Dialog open={openLogin} onClose={handleClose}>
        <DialogTitle>Вход в личный кабинет</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <Controller
              name="firstName"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Укажите ваше имя пользователя"
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
                  label="Ваш пароль"
                  variant="filled"
                  type={"password"}
                  onChange={onChange}
                  value={value}
                  style={{ width: 550 }}
                />
              )}
            />
            {correctData === "NoCorrect" ? (
              <p style={{ color: "red" }}>
                Проверьте вводимую информацию!!! Аккаунт с такими параметрами не
                найден в системе!
              </p>
            ) : (
              ""
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Закрыть</Button>
            <Button type="submit">Вход</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
