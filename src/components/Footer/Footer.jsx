import style from "./Footer.module.css";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import ScrollDialog from "./FooterInform.jsx";

const Footer = () => {
  return (
    <Paper elevation={12} className={`${style.wrapperBottom}`}>
      <Paper>
        <div className={`${style.imgFullSetting}`}>
          <img
            src={require("./logoOrig.jpg")}
            alt="Nope logo"
            className={`${style.imgSettingFooter}`}
          />
        </div>
      </Paper>
      <Paper elevation={0} className={`${style.footerInform}`}>
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
