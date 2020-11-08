import React, { useState, useEffect } from "react";
import { SketchPicker } from "react-color";
import { connect } from "react-redux";
import { dispatcher } from "./../../redux/actions/dispatchers";
import { Paper, makeStyles } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { post } from "../../services/calls";
const ColorPickerModal = ({ colors, id, addColor, closeModals }) => {
  const useStyles = makeStyles({
    button: {
      padding: "5px 25px",
      color: "white",
      background: "rgb(70, 160, 80)",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    paper: {
      width: "250px",
      height: "400px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "column",
      borderRadius: "5px",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    cancelBox: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    cancel: {
      cursor: "pointer",
      color: "red",
    },
  });
  const classes = useStyles();
  const [precolor, setPrecolor] = useState(null);

  useEffect(() => {
    setPrecolor(colors); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeColors = (element) => {
    const reColor = JSON.parse(JSON.stringify(colors));
    reColor[id - 1].color = element.hex;
    addColor(reColor);
  };

  const saveColors = async () => {
    try {
      const dataCall = {
        id: id,
        color: colors[id - 1].color,
      };
      const response = await post("changeColors", dataCall);
      if (response?.ok) {
        closeModals();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const cancel = () => {
    addColor(precolor);
    closeModals();
  };

  return (
    <Paper className={classes.paper} elevation={15}>
      <div className={classes.cancelBox}>
        <Close className={classes.cancel} onClick={() => cancel()} />
      </div>
      <SketchPicker
        color={colors[id - 1].color}
        onChangeComplete={changeColors}
      />
      <button className={classes.button} onClick={() => saveColors()}>
        Guardar
      </button>
    </Paper>
  );
};

const mapStateToProps = (store) => ({
  colors: store.data.colors,
});

const mapDispatch = dispatcher(["addColor", "closeModals"]);

export default connect(mapStateToProps, mapDispatch)(ColorPickerModal);
