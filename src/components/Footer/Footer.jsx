import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import ScrollDialog from "./FooterInform.jsx";

const Footer = () => {
  return (
    <Paper
      elevation={12}
      sx={{
        display: "flex",
        margin: "30px 0px 0px 0px",
        padding: 20,
        height: 200,
        width: "-webkit-full-available",
        position: "static",
        justifyContent: "space-around",
        flexDirection: "column",
        alignContent: "space-around",
        alignItems: "flex-end",
        flexWrap: "wrap",
      }}
    >
      <Paper
        sx={{
          display: "inline-flex",
          flexDirection: "column-reverse",
          flexWrap: "wrap",
        }}
      >
        <img
          src={require("./logoOrig.jpg")}
          alt="Nope logo"
          style={{ width: 350 }}
        />
      </Paper>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          paddingRight: 0,
          paddingTop: 0,
          width: "max-content",
          flexDirection: "column",
          alignContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Typography variant="h5">
          Наша почта:{" "}
          <a href="https://www.google.ru/?hl=ru">example@gmail.ru</a>
        </Typography>
        <br />
        <Typography variant="h5">Телефон для связи: +79674356789</Typography>
        <br />
        <Typography variant="h5">
          Телефон для связи с юристом: +79876543223
        </Typography>
        <ScrollDialog />
      </Paper>
    </Paper>
  );
};

export default Footer;
