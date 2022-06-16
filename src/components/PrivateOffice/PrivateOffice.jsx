import * as React from "react";
import Paper from "@mui/material/Paper";
import LoginForm from "../InitializationForm/LoginForm.jsx";
import RegisterForm from "../InitializationForm/RegisterForm.jsx";
import UserCard from "./UserCard.jsx";
import axios from "axios";
import Decryption from "../Cryptografy/Decryption.js";

export default function PrivateOffice() {
  const [autorization, setAutorization] = React.useState(false);
  const [userNameCard, setUserNameCard] = React.useState(null);
  const [correctData, setCorrectData] = React.useState(null);

  const LoginUser = (userData) => {
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
              console.log("АВТОРИЗАЦИЯ ПРОШЛА УСПЕШНО!!!");
            } else {
              setCorrectData("NoCorrect");
              console.log("Не авторизован!");
            }
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Paper
      elevation={12}
      style={{
        width: "max-content",
        marginLeft: 15,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
      }}
    >
      {autorization ? (
        <UserCard
          userNameCard={userNameCard}
          setAutorization={setAutorization}
        />
      ) : (
        <>
          <RegisterForm />
          <LoginForm
            LoginUser={LoginUser}
            correctData={correctData}
            setCorrectData={setCorrectData}
          />
        </>
      )}
    </Paper>
  );
}
