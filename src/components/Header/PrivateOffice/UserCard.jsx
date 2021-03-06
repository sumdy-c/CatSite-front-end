import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";

export default function UserCard({ userNameCard, setAutorization }) {
  const [exit, setExit] = React.useState(false);

  const hanldeConfirmExit = () => {
    setAutorization(false);
  };

  const cancelConfirmExit = () => {
    setExit(false);
  };

  const handleExitAccount = () => {
    setExit(true);
  };

  return (
    <Box
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-end",
        flexDirection: "row",
      }}
    >
      <Card sx={{ minWidth: 275 }} style={{ display: "flex" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Это вы, и вы прекрасны!
          </Typography>
          <Typography variant="h5" component="div">
            {userNameCard.length <= 17
              ? userNameCard
              : `${userNameCard.slice(0, 17)}...`}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="green">
            online
          </Typography>
          <Typography variant="h6"> </Typography>
        </CardContent>
        <CardActions>
          <Button color="error" size="small" onClick={handleExitAccount}>
            Выйти из аккаунта!
          </Button>
        </CardActions>
      </Card>
      {exit ? (
        <Paper style={{ marginRight: -260 }}>
          <Button
            color="error"
            style={{ width: "-webkit-fill-available", padding: 10 }}
            onClick={hanldeConfirmExit}
          >
            Подтвердить выход
          </Button>
          <Button
            style={{ width: "-webkit-fill-available", padding: 10 }}
            onClick={cancelConfirmExit}
          >
            Отмена
          </Button>
        </Paper>
      ) : null}
    </Box>
  );
}
