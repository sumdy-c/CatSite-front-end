import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import style from "./UploadPhoto.module.css";

const Input = styled("input")({
  display: "none",
});

const UploadPhoto = ({ setImg, sendfile, img }) => {
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
        onClick={sendfile}
        disabled={!Boolean(img)}
      >
        Загрузить фотографию
      </Button>
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
      </label>
    </Stack>
  );
};

export default UploadPhoto;
