import validSetting from "../../../../service/Validation.js";

export const sendForm = (
  data,
  open,
  funcEditCard,
  handleClose,
  newCat,
  setValid,
  trackerEditID
) => {
  if (validSetting(data) === true) {
    if (open === "editCat") {
      funcEditCard(trackerEditID, data);
      handleClose();
    } else {
      newCat(data);
      handleClose();
    }
  } else {
    setValid(validSetting(data));
    return;
  }
};
