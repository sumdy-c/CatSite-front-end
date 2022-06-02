import * as React from "react";
import "./CatForm.css";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Snackbar from "@mui/material/Snackbar";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import AlertDialog from "./AlertDialog.jsx";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}
export default function CatForm({
  name,
  price,
  photo,
  info,
  Booked,
  age,
  CatColor,
  breed,
  id,
  deleteCatConfirm,
  toggleBooked,
  setTrackerEditID,
  setOpens,
}) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [checked, setChecked] = React.useState(Booked);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  const handleClickBooked = (Transition) => () => {
    toggleBooked();
    ToggleCheckBox();
    setState({
      open: true,
      Transition,
    });
  };
  const handleCloseMes = () => {
    setState({
      ...state,
      open: false,
    });
  };

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const ToggleCheckBox = () => {
    setChecked(!checked);
  };

  const handleDeleteCat = (e) => {
    handleClose(e);
    setIsModalOpen(true);
  };

  const FormCreateOpen = (e) => {
    setOpens(2);
    handleClose(e);
    setTrackerEditID();
  };

  return (
    <>
      <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 }} id={`${id}`}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                Кот
              </Avatar>
            }
            action={
              <Stack direction="row" spacing={2}>
                <div>
                  <MoreVertIcon
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? "composition-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                  >
                    Меню
                  </MoreVertIcon>

                  <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === "bottom-start"
                              ? "left top"
                              : "left bottom",
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                              autoFocusItem={open}
                              id="composition-menu"
                              aria-labelledby="composition-button"
                              onKeyDown={handleListKeyDown}
                            >
                              <MenuItem onClick={FormCreateOpen}>
                                Редактировать котика
                              </MenuItem>
                              <MenuItem onClick={handleDeleteCat}>
                                Удалить котика
                              </MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </div>
              </Stack>
            }
            title={`${name}`}
            subheader={`${age} год`}
          />
          <CardMedia
            className="imgstyle"
            component="img"
            height="194"
            image={photo}
            alt="Нет фото("
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {`Порода - ${breed}`}
              <br />
              {`Цвет - ${CatColor}`}
              <br />
              {`Стоймость часа - ${price} рублей`}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button variant="text" onClick={handleClickBooked(SlideTransition)}>
              {checked ? <p>Снять бронь!</p> : <p>Забронировать котика!</p>}
            </Button>
            <Checkbox
              id="checkbox1"
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
              checked={checked}
            />
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Container>
                <Typography paragraph>Описание:</Typography>
                <Typography
                  paragraph
                  className="inform"
                >{`${info}`}</Typography>
              </Container>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
      <div>
        <Snackbar
          open={state.open}
          onClose={handleCloseMes}
          TransitionComponent={state.Transition}
          message={
            Booked ? "Вы успешно забронировали кота!" : "Бронь с котика снята"
          }
          key={state.Transition.name}
        />
      </div>
      {isModalOpen ? (
        <AlertDialog
          modalOpen={setIsModalOpen}
          modal={isModalOpen}
          deleteCatConfirm={deleteCatConfirm}
        />
      ) : null}
    </>
  );
}
