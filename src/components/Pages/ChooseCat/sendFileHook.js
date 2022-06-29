import * as React from "react";
import axios from "axios";

const useSendFile = () => {
  const [img, setImg] = React.useState(null);
  const [avatar, setAvatar] = React.useState(null);
  const sendfile = React.useCallback(async () => {
    try {
      const data = new FormData();
      data.append("avatar", img);
      await axios
        .post("/api/upload/", data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          setAvatar(res.data.path.slice(59));
          setImg(null);
        });
    } catch (er) {
      console.log(`Ошибка сервера : ${er}`);
    }
  }, [img, setAvatar, setImg]);

  return { img, avatar, setImg, setAvatar, sendfile };
};

export default useSendFile;
