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
import FormControl from "@mui/material/FormControl";
import getData from "../GettingData/GetDataContact";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ContactInfoDialog() {
  const [open, setOpen] = React.useState(false);
  const [valid, setValid] = React.useState(false);

  const [viewMes, setViewMes] = React.useState(false);
  const { control, reset, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      contactInfo: "",
      question: "",
      Person: "",
    },
  });

  const onSubmit = (data) => {
    if (
      validateEmail(data.contactInfo) &&
      validateName(data.firstName) &&
      validateQuestion(data.question) &&
      validatePerson(data.Person)
    ) {
      setValid(false);
      getData(data);
      reset();
      setViewMes(true);
      setTimeout(() => {
        setViewMes(false);
      }, 2000);
    } else {
      setViewMes(false);
      setValid(true);
    }
  };

  const validatePerson = (val) => {
    return val !== "";
  };
  const validateQuestion = (ques) => {
    return ques.length !== 0;
  };
  const validateName = (name) => {
    return name.length !== 0;
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setValid(false);
    reset();
  };

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
            onSubmit={handleSubmit(onSubmit)}
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
              <div>
                <section>
                  <Controller
                    control={control}
                    name="Person"
                    render={({ field }) => (
                      <FormControl fullWidth>
                        <InputLabel>Кому отправить ваше сообщение ?</InputLabel>
                        <Select
                          label="Кому отправить ваше сообщение ?"
                          {...field}
                          style={{
                            width: 600,
                          }}
                          error={valid}
                        >
                          {Personal.map((el) => (
                            <MenuItem key={el.key} value={el.value}>
                              {el.name} ({el.employee})
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                  />
                </section>
              </div>
              <div>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      error={valid}
                      label="Ваше имя"
                      variant="filled"
                      onChange={onChange}
                      value={value}
                      style={{ width: 600 }}
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="question"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      error={valid}
                      label="Ваш вопрос"
                      variant="filled"
                      onChange={onChange}
                      value={value}
                      style={{ width: 600 }}
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="contactInfo"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      error={valid}
                      label="Укажите свою электронную почту"
                      variant="filled"
                      onChange={onChange}
                      value={value}
                      style={{ width: 600 }}
                    />
                  )}
                />
              </div>

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
              {valid ? (
                <p style={{ color: "red", marginLeft: 130 }}>
                  Проверьте правильность заполнения формы!
                </p>
              ) : (
                ""
              )}
              {viewMes ? (
                <p style={{ color: "green", marginLeft: 10 }}>
                  Мы получили ваше сообщение и ответим как можно скорее!!!
                </p>
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
