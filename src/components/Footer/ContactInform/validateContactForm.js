import getData from "../../../service/GettingData/GetDataContact";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const Validate = (data) => {
  const { firstName, contactInfo, question, Person } = data;

  if (
    Person !== "" &&
    question.length !== 0 &&
    firstName.length !== 0 &&
    validateEmail(contactInfo)
  ) {
    return true;
  } else {
    return false;
  }
};
export function SendForm(data, reset, setValid) {
  if (Validate(data)) {
    setValid("done");
    getData(data);
    reset();
  } else {
    setValid("err");
  }
}
