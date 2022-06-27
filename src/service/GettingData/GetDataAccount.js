import axios from "axios";
import PassKeyGen from "../Cryptografy/PassKeyGen";

const getDataJsonUser = (obj) => {
  axios
    .post("http://localhost:3001/users", {
      name: obj.name,
      passkey: obj.passkey,
      email: obj.email,
      id: Date.now(),
    })
    .then((res) => {})
    .catch((error) => {});
};

const getInfoUser = async (name, pass, email) => {
  const newDataObj = {
    name: name,
    passkey: PassKeyGen(pass),
    email: email,
  };
  getDataJsonUser(newDataObj);
};
export default getInfoUser;
