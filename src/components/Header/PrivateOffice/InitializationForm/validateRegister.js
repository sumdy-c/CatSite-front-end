import getInfoUser from "../../../../service/GettingData/GetDataAccount.js";

export function validateRegister(
  data,
  dataName,
  reset,
  setAlertReg,
  setValid,
  handleClose
) {
  const namesValid = dataName;
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePass = (pass, confirmPass) => {
    if (pass.length < 6 || !pass.match(/^\s*(\w+)\s*$/)) {
      return false;
    } else {
      return pass === confirmPass ? true : false;
    }
  };

  const validNewName = (name) => {
    let validname = namesValid.findIndex((item) => item === name);
    if (validname === -1) {
      return true;
    } else {
      return false;
    }
  };
  if (
    validateEmail(data.email) &&
    validatePass(data.password, data.confirmPass) &&
    validNewName(data.firstName)
  ) {
    handleClose();
    setValid(false);
    getInfoUser(data.firstName, data.password, data.email);
    reset();
    setAlertReg(true);
    setTimeout(() => {
      setAlertReg(false);
    }, 2000);
  } else {
    setValid(true);
    console.log("Тут ошибка!");
  }
}
