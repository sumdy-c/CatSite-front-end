import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import InputLabel from "@mui/material/InputLabel";
import Paper from "@mui/material/Paper";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Personal from "./Personal.js";
import { useForm, Controller } from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { SendForm } from "./validateContactForm.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ContactInfoDialog() {
  const [open, setOpen] = React.useState(false);
  const [valid, setValid] = React.useState(null);
  const { control, reset, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      contactInfo: "",
      question: "",
      Person: "",
    },
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  if (valid !== null) {
    setTimeout(() => {
      setValid(null);
    }, 2000);
  }
  return (
    <>
      <Button variant="text" onClick={handleClickOpen} size="large">
        Открыть контактную информацию
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography
              sx={{
                ml: 2,
                flex: 1,
                display: "flex",
                justifyContent: "space-evenly",
              }}
              variant="h6"
              component="div"
            >
              Не стесняйтесь, напишите нам! Мы ответим вам как можно скорее!!
            </Typography>
            <IconButton
              edge="start"
              size="large"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            backgroundImage:
              "url(http://127.0.0.1:8887/imgPersonal/backgroundQwstion.jpg)",
          }}
        >
          <form
            onSubmit={handleSubmit((data) => SendForm(data, reset, setValid))}
            style={{
              marginBottom: 30,
              marginTop: 30,
            }}
          >
            <Paper
              elevation={12}
              style={{
                padding: 10,
              }}
            >
              <Box>
                <section>
                  <Controller
                    control={control}
                    name="Person"
                    render={({ field }) => (
                      <form fullWidth>
                        <InputLabel>Кому отправить ваше сообщение ?</InputLabel>
                        <Select
                          label="Кому отправить ваше сообщение ?"
                          {...field}
                          style={{
                            width: 600,
                          }}
                          error={valid === "err"}
                        >
                          {Personal.map((el) => (
                            <MenuItem key={el.key} value={el.value}>
                              {el.name} ({el.employee})
                            </MenuItem>
                          ))}
                        </Select>
                      </form>
                    )}
                  />
                </section>
              </Box>
              <Box>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      error={valid === "err"}
                      label="Ваше имя"
                      variant="filled"
                      onChange={onChange}
                      value={value}
                      style={{ width: 600 }}
                    />
                  )}
                />
              </Box>
              <Box>
                <Controller
                  name="question"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      error={valid === "err"}
                      label="Ваш вопрос"
                      variant="filled"
                      onChange={onChange}
                      value={value}
                      style={{ width: 600 }}
                    />
                  )}
                />
              </Box>
              <Box>
                <Controller
                  name="contactInfo"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      error={valid === "err"}
                      label="Укажите свою электронную почту"
                      variant="filled"
                      onChange={onChange}
                      value={value}
                      style={{ width: 600 }}
                    />
                  )}
                />
              </Box>

              <Button
                variant="contained"
                color="success"
                style={{
                  width: 600,
                  height: 50,
                }}
                type="submit"
              >
                Отправить!
              </Button>
              {valid === "err" ? (
                <Box component="p" style={{ color: "red", marginLeft: 130 }}>
                  Проверьте правильность заполнения формы!
                </Box>
              ) : (
                ""
              )}
              {valid === "done" ? (
                <Box component="p" style={{ color: "green", marginLeft: 10 }}>
                  Мы получили ваше сообщение и ответим как можно скорее!!!
                </Box>
              ) : (
                ""
              )}
            </Paper>
          </form>
        </Box>
        <Divider />
        <List>
          <Grid container spacing={2}>
            {Personal.map((el) => (
              <Grid item xs={12} sm={6} md={4} key={el.key}>
                <ListItem key={el.key}>
                  <img
                    src={`${el.photo}`}
                    alt="noPhoto"
                    loading="lazy"
                    style={{ width: 380, heigth: 500 }}
                  />
                  <ListItemText
                    primary={el.name}
                    secondary={el.employee}
                    sx={{
                      marginLeft: 5,
                    }}
                  />
                </ListItem>
              </Grid>
            ))}
          </Grid>
        </List>
      </Dialog>
    </>
  );
}
