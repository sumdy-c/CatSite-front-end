import { saltw } from "./Crypt.js";

const PassKeyGen = (originPass) => {
  let arrPass = originPass.split("");
  const keyDivider = "NLvdfildfuygiuohyUHbvfgvo32fo8oby";
  let keyGen = "";
  arrPass.forEach((pass) => {
    saltw.forEach((key) => {
      if (Object.keys(key)[0] === pass) {
        keyGen = keyGen + Object.values(key)[0] + keyDivider;
      }
    });
  });
  return keyGen;
};

export default PassKeyGen;
