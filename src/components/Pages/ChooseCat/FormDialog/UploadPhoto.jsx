import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

const Input = styled("input")({
  display: "none",
});

const UploadPhoto = ({ setImg, sendfile, img }) => {
  const [doneUpload, setDoneUpload] = React.useState(false);

  const accessUpload = () => {
    sendfile();
    setDoneUpload(true);
  };

  return (
    <Stack
      style={{ justifyContent: "center", paddingTop: 25 }}
      direction="row"
      alignItems="center"
      spacing={2}
    >
      <label>
        <Input
          accept="image/*"
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
        onClick={accessUpload}
        disabled={!Boolean(img)}
        color="success"
      >
        Загрузить фотографию
      </Button>
      {doneUpload ? <DoneOutlineIcon color="success" /> : ""}
      <label>
        <Input accept="image/*" type="file" />
      </label>
    </Stack>
  );
};

export default UploadPhoto;
