import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import style from "./UploadPhoto.module.css";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

const Input = styled("input")({
  display: "none",
});

const UploadPhoto = ({ setImg, sendfile, img }) => {
  const [doneUpload, setDoneUpload] = React.useState(false);

  const AccessUpload = () => {
    sendfile();
    setDoneUpload(true);
  };

  return (
    <Stack
      className={`${style.btn}`}
      direction="row"
      alignItems="center"
      spacing={2}
    >
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <Button variant="contained" component="span">
          Выбрать фотографию
        </Button>
      </label>
      <Button
        variant="contained"
        component="span"
        onClick={AccessUpload}
        disabled={!Boolean(img)}
        color="success"
      >
        Загрузить фотографию
      </Button>
      {doneUpload ? <DoneOutlineIcon color="success" /> : ""}
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
      </label>
    </Stack>
  );
};

export default UploadPhoto;
