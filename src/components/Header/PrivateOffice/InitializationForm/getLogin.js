import axios from "axios";
import Decryption from "../../../../service/Cryptografy/Decryption.js";

export const LoginUser = (
  userData,
  setAutorization,
  setUserNameCard,
  setCorrectData
) => {
  let data;
  axios
    .get("http://localhost:3001/users")
    .then((res) => {
      data = res.data;
      data.forEach((item) => {
        if (userData.firstName === item.name) {
          if (userData.password === Decryption(item.passkey)) {
            setAutorization(true);
            setUserNameCard(item.name);
            setCorrectData("Correct");
          } else {
            setCorrectData("NoCorrect");
          }
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
