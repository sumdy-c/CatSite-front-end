import { saltw } from "./Crypt.js";
const keyDivider = "NLvdfildfuygiuohyUHbvfgvo32fo8oby";

const Decryption = (keygen) => {
  let decyptPass = "";

  const passLog = keygen.split(keyDivider);

  passLog.forEach((elem) => {
    saltw.forEach((item) => {
      if (Object.values(item)[0] === elem) {
        decyptPass = decyptPass + Object.keys(item)[0];
      }
    });
  });
  return decyptPass;
};
export default Decryption;
