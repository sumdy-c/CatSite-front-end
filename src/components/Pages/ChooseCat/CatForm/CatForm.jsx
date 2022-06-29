import * as React from "react";
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
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";

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
  booked,
  age,
  catColor,
  breed,
  id,
  deleteCatConfirm,
  togglebooked,
  setTrackerEditID,
  setOpens,
}) {
  const [expanded, setExpanded] = React.useState(false);
  const [checked, setChecked] = React.useState(booked);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
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

  const handleClickbooked = (Transition) => () => {
    togglebooked();
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
  const ToggleCheckBox = () => {
    setChecked(!checked);
  };
  const handleDeleteCat = (e) => {
    handleClose(e);
    setIsModalOpen(true);
  };
  const formCreateOpen = (e) => {
    setOpens("editCat");
    handleClose(e);
    setTrackerEditID();
  };
  const preloader = () => {
    setLoading(true);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }} id={`${id}`}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }}>Кот</Avatar>}
          action={
            <Stack direction="row" spacing={2}>
              <Box>
                <IconButton
                  ref={anchorRef}
                  aria-controls={open ? "composition-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                >
                  {!open ? <MenuIcon /> : <MoreVertIcon />}
                </IconButton>

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
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem onClick={formCreateOpen}>
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
              </Box>
            </Stack>
          }
          title={`${name}`}
          subheader={`${age} год`}
        />
        <CardMedia
          onLoad={preloader}
          sx={{
            height: 305,
            width: 346,
          }}
          component="img"
          height="194"
          image={isLoading ? photo : require("./preload.png")}
          alt="Нет фото("
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {`Порода - ${breed}`}
            <br />
            {`Цвет - ${catColor}`}
            <br />
            {`Стоймость часа - ${price} рублей`}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button variant="text" onClick={handleClickbooked(SlideTransition)}>
            {checked ? (
              <Box component="p">Снять бронь!</Box>
            ) : (
              <Box component="p">Забронировать котика!</Box>
            )}
          </Button>

          <Checkbox
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
            checked={checked}
          />
          <ExpandMore expand={expanded} onClick={handleExpandClick}>
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Container>
              <Typography paragraph>Описание:</Typography>
              <Typography
                paragraph
                sx={{
                  wordBreak: "break-all",
                }}
              >{`${info}`}</Typography>
            </Container>
          </CardContent>
        </Collapse>
      </Card>
      <Box>
        <Snackbar
          open={state.open}
          onClose={handleCloseMes}
          TransitionComponent={state.Transition}
          message={
            booked ? "Вы успешно забронировали кота!" : "Бронь с котика снята"
          }
          key={state.Transition.name}
        />
      </Box>
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
