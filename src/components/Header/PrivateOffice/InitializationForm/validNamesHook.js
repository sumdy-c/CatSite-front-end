import axios from "axios";

export const useValidName = () => {
  let namesValid = [];
  axios
    .get("http://localhost:3001/users")
    .then((res) => {
      res.data.forEach((item) => {
        namesValid.push(item.name);
      });
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
  return namesValid;
};
