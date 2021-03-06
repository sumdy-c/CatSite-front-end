import * as React from "react";
import SettingPanelCat from "./SettingPanelCat/SettingPanelCat";
import CatForm from "./CatForm/CatForm.jsx";
import { useState, useReducer } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormDialog from "./FormDialog/FormDialog";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Paggination from "../../../service/Paggination.js";
import dataCat from "../../../constants/DataCat.js";
import filterCat from "../../../service/FilterCat";
import useSendFile from "./sendFileHook.js";
import { reducer } from "./reducer";

// Запуск серверной части с помощью Web Server For Chrome.

const ChooseCatPage = () => {
  const [state, dispatch] = useReducer(reducer, dataCat);
  const [open, setOpen] = useState("closeModal");
  const [trackerEditID, setTrackerEditID] = useState(1);
  const [page, setPage] = useState(1);
  const [booked, setBooked] = useState("all");

  const { img, avatar, setImg, setAvatar, sendfile } = useSendFile();

  let visibleCard = filterCat(state, booked);

  const Count = Math.ceil(state.length / 6);

  const getPageCount = (e, page) => {
    setPage(page);
  };

  visibleCard = Paggination(visibleCard, page);

  return (
    <>
      <SettingPanelCat isOpen={setOpen} setBooked={setBooked} />
      <FormDialog
        newCat={(data) => dispatch({ type: "add", data, avatar: avatar })}
        open={open}
        setOpen={setOpen}
        funcEditCard={(key, data) =>
          dispatch({ type: "edit", avatar: avatar, key, data })
        }
        setTrackerEditID={setTrackerEditID}
        trackerEditID={trackerEditID}
        setImg={setImg}
        sendfile={sendfile}
        setAvatar={setAvatar}
        img={img}
      />
      <Container
        sx={{
          paddingLeft: 10,
          paddingRight: 10,
          marginBottom: 0,
          height: "max-content",
        }}
      >
        <Grid container spacing={2}>
          {visibleCard.map((elem) => (
            <Grid item xs={12} sm={6} md={4} key={elem.id}>
              <CatForm
                key={elem.id}
                name={elem.nameCat}
                price={elem.catPriceInHour}
                photo={elem.catPhoto}
                info={elem.infoCat}
                booked={elem.booked}
                age={elem.ageCat}
                catColor={elem.catColor}
                breed={elem.breed}
                setTrackerEditID={() => {
                  setTrackerEditID(elem.id);
                }}
                deleteCatConfirm={() =>
                  dispatch({ type: "delete", key: elem.id })
                }
                togglebooked={() =>
                  dispatch({ type: "togglebooked", key: elem.id })
                }
                setOpens={setOpen}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container
        sx={{
          marginTop: 10,
        }}
      >
        <Stack spacing={8}>
          <Pagination
            count={Count}
            onChange={getPageCount}
            variant="outlined"
            color="primary"
            size="large"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          />
        </Stack>
      </Container>
    </>
  );
};
export default ChooseCatPage;
