import style from "./App.module.css";
import * as React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CatForm from "../CatForm/CatForm.jsx";
import { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormDialog from "../FormDialog/FormDialog";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Paggination from "./Paggination.js";
import axios from "axios";

// Запуск серверной части с помощью Web Server For Chrome.

const App = () => {
  const [datacat, setCat] = useState([
    {
      NameCat: "Майк",
      CatPriceInHour: 867,
      CatPhoto: "http://127.0.0.1:8887/images/1654155948993-avatar.jpg",
      InfoCat:
        "Кот который быстро бегает и высоко прыгает lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      CatColor: "Черепаховый",
      Breed: "Американский бобтейл",
      Booked: false,
      AgeCat: 3,
      id: 827364872346,
    },
    {
      NameCat: "Рафаэль",
      CatPriceInHour: 532,
      CatPhoto:
        "http://127.0.0.1:8887/images/1654170021310-1252x1252_0xc0a839a4_4877201821488363395.jpeg",
      InfoCat:
        "Кот который быстро бегает и высоко прыгает lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      CatColor: "Красный",
      Breed: "Домашняя",
      Booked: false,
      AgeCat: 1,
      id: 8326487234,
    },

    {
      NameCat: "Трумен",
      CatPriceInHour: 1000,
      CatPhoto:
        "http://127.0.0.1:8887/images/1654170047347-Felis_silvestris_silvestris.jpg",
      InfoCat:
        "Кот который быстро бегает и высоко прыгает lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      CatColor: "Рыжий",
      Breed: "Бенгальский",
      Booked: false,
      AgeCat: 4,
      id: 98237492384,
    },

    {
      NameCat: "Свят",
      CatPriceInHour: 1000,
      CatPhoto: "http://127.0.0.1:8887/images/1654170092972-kotes285erz.jpg",
      InfoCat:
        "Кот который быстро бегает и высоко прыгает lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      CatColor: "Черный",
      Breed: "Аравийский мяу",
      Booked: false,
      AgeCat: 1,
      id: 65374600623,
    },
    {
      NameCat: "Паша",
      CatPriceInHour: 1000,
      CatPhoto:
        "http://127.0.0.1:8887/images/1654170138509-cat-2143332_1280.jpg",
      InfoCat:
        "Кот который быстро бегает и высоко прыгает lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      CatColor: "Черный",
      Breed: "Бурма",
      Booked: false,
      AgeCat: 1,
      id: 6546063,
    },
  ]);
  const [open, setOpen] = useState(-0);
  const [trackerEditID, setTrackerEditID] = useState(1);

  const filterDataCard = datacat;

  const deleteCatConfirm = (id) => {
    DeleteCat(id);
  };
  const DeleteCat = (id) => {
    const index = datacat.findIndex((el) => el.id === id);
    let newArr = [...datacat.slice(0, index), ...datacat.slice(index + 1)];
    setCat(newArr);
  };

  const [booked, setBooked] = useState("all");

  const filterCat = (filterDataCard, booked) => {
    switch (booked) {
      case "all":
        return filterDataCard;
      case "booked":
        return filterDataCard.filter((item) => item.Booked);
      case "free":
        return filterDataCard.filter((item) => !item.Booked);
      default:
        return filterDataCard;
    }
  };

  const NewCat = (data) => {
    let GETNewImg = `http://127.0.0.1:8887/images/${avatar}`;
    const { name, breed, age, color, price, info } = data;
    const newCat = {
      NameCat: name,
      CatPriceInHour: price,
      CatPhoto: avatar
        ? GETNewImg
        : `http://127.0.0.1:8887/images/defaultImgCat.png`,
      InfoCat: info,
      CatColor: color,
      Breed: breed,
      Booked: false,
      AgeCat: age,
      id: Date.now(),
    };
    let newdatacat = [...datacat, newCat];
    setCat(newdatacat);
  };

  const FuncEditCard = (id, data) => {
    let GETEditImg = `http://127.0.0.1:8887/images/${avatar}`;
    const index = datacat.findIndex((el) => el.id === id);
    const oldEl = datacat[index];
    const { name, breed, age, color, price, info } = data;
    const newItem = {
      ...oldEl,
      NameCat: name,
      Breed: breed,
      CatPhoto: avatar ? GETEditImg : oldEl.CatPhoto,
      AgeCat: age,
      CatColor: color,
      CatPriceInHour: price,
      InfoCat: info,
    };
    const newArr = [
      ...datacat.slice(0, index),
      newItem,
      ...datacat.slice(index + 1),
    ];
    setCat(newArr);
  };

  const toggleBooked = (id) => {
    const index = datacat.findIndex((el) => el.id === id);
    const oldEl = datacat[index];
    const newItem = { ...oldEl, Booked: !oldEl.Booked };
    const newArr = [
      ...datacat.slice(0, index),
      newItem,
      ...datacat.slice(index + 1),
    ];
    setCat(newArr);
  };

  let visibleCard = filterCat(filterDataCard, booked);
  const Count = Math.ceil(datacat.length / 6);

  const [page, setPage] = useState(1);

  const getPageCount = (e, page) => {
    setPage(page);
  };

  visibleCard = Paggination(visibleCard, page);

  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const sendfile = React.useCallback(async () => {
    try {
      const data = new FormData();
      data.append("avatar", img);

      await axios
        .post("/api/upload/", data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          setAvatar(res.data.path.slice(59));
          setImg(null);
        });
    } catch (er) {
      console.log(er);
    }
  }, [img]);

  return (
    <>
      <Header isOpen={setOpen} setBooked={setBooked} />
      <FormDialog
        newCat={NewCat}
        open={open}
        setOpen={setOpen}
        FuncEditCard={FuncEditCard}
        setTrackerEditID={setTrackerEditID}
        trackerEditID={trackerEditID}
        setImg={setImg}
        sendfile={sendfile}
        setAvatar={setAvatar}
        img={img}
      />

      <Container className={`${style.contain}`}>
        <Grid container spacing={2}>
          {visibleCard.map((elem) => (
            <Grid item xs={12} sm={6} md={4} key={elem.id} zeroMinWidth>
              <CatForm
                key={elem.id}
                name={elem.NameCat}
                price={elem.CatPriceInHour}
                photo={elem.CatPhoto}
                info={elem.InfoCat}
                Booked={elem.Booked}
                age={elem.AgeCat}
                CatColor={elem.CatColor}
                breed={elem.Breed}
                setTrackerEditID={() => {
                  setTrackerEditID(elem.id);
                }}
                deleteCatConfirm={() => deleteCatConfirm(elem.id)}
                toggleBooked={() => toggleBooked(elem.id)}
                setOpens={setOpen}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container className={`${style.pagginationWrapper}`}>
        <Stack spacing={8}>
          <Pagination
            count={Count}
            onChange={getPageCount}
            className={`${style.paggination}`}
            variant="outlined"
            color="primary"
            size="large"
          />
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default App;
