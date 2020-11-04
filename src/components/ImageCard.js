import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ColorPickerButton from "./ColoPickerButton";
import { connect } from "react-redux";
import { dispatcher } from "./../redux/actions/dispatchers";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const ImageCard = ({ image, info, id, openModals, colors }) => {
  const useStyles = makeStyles({
    zoom: {
      transition: "transform .2s",
      width: "320px",
      margin: "3%",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    img: {
      display: "block",
      width: "320px",
      cursor: "pointer",
      height: "180px",
      objectFit: "cover",
    },
    background: {
      backgroundColor: colors[1]?.color,
    },
  });
  const classes = useStyles();
  return (
    <Card className={classes.zoom}>
      <img
        onClick={() => {
          if (window.innerWidth > 600) {
            openModals({ type: "fullImage", id: id });
          }
        }}
        className={classes.img}
        src={`data:image;base64,${image}`}
        title={info}
      />
      <CardContent className={classes.background}>
        <Typography variant="body2" color="textSecondary" component="p">
          {info}
        </Typography>
      </CardContent>
      <CardActions className={classes.background}>
        <Button
          onClick={() => openModals({ type: "upload", id: id })}
          size="small"
          color="secondary"
        >
          Cambiar
        </Button>
        <ColorPickerButton id="2" />
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (store) => ({
  colors: store.data.colors,
  token: store.auth.token,
});

const mapDispatch = dispatcher(["getColors", "getText", "getImages"]);
export default connect(mapStateToProps, mapDispatch)(ImageCard);
