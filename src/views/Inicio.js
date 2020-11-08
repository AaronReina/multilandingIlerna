import React from "react";
import { connect } from "react-redux";
import { dispatcher } from "./../redux/actions/dispatchers";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import ColorPickerButton from "./../components/ColoPickerButton";
const Inicio = ({ images, colors, text, rol, openModals }) => {
  const useStyles = makeStyles({
    img: {
      width: "100%",
      maxHeight: "93vh",
      height: "auto",
    },
    center: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    backColor: {
      background: colors[5].color,
      minHeight: "93vh",
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.backColor}>
      <img
        className={classes.img}
        alt="Contacto"
        src={`data:image;base64,${images[13].image}`}
      />
      {rol && (
        <div>
          <Button
            onClick={() => openModals({ type: "upload", id: 14 })}
            size="small"
            color="secondary"
          >
            Cambiar imagen
          </Button>
          <ColorPickerButton id="6" />
        </div>
      )}
      <div></div>
    </div>
  );
};

const mapStateToProps = (store) => ({
  colors: store.data.colors,
  text: store.data.text,
  images: store.data.images,
  rol: store.auth.rol,
});
const mapDispatch = dispatcher(["openModals"]);

export default connect(mapStateToProps, mapDispatch)(Inicio);
