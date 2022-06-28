import * as React from "react";
import Paper from "@mui/material/Paper";
import LoginForm from "./InitializationForm/LoginForm.jsx";
import RegisterForm from "./InitializationForm/RegisterForm.jsx";
import UserCard from "./UserCard.jsx";
import { LoginUser } from "./InitializationForm/getLogin.js";

export default function PrivateOffice() {
  const [autorization, setAutorization] = React.useState(false);
  const [userNameCard, setUserNameCard] = React.useState(null);
  const [correctData, setCorrectData] = React.useState(null);

  return (
    <Paper
      elevation={12}
      style={{
        width: "max-content",
        marginLeft: 25,
        marginBottom: 15,
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
            LoginUser={(userData) => {
              LoginUser(
                userData,
                setAutorization,
                setUserNameCard,
                setCorrectData
              );
            }}
            correctData={correctData}
            setCorrectData={setCorrectData}
          />
        </>
      )}
    </Paper>
  );
}
