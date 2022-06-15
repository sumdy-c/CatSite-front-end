import axios from "axios";
import PassKeyGen from "./PassKeyGen";

const getDataJsonUser = (obj) => {
  console.log(obj);
  axios
    .post("http://localhost:3001/users", {
      name: obj.name,
      passkey: obj.passkey,
      email: obj.email,
      id: Date.now(),
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
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
