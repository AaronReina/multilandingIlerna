import React from "react";
import { Palette } from "@material-ui/icons";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { dispatcher } from "./../redux/actions/dispatchers";

const ColorPickerButton = ({ id, openModals, rol }) => {
  const useStyles = makeStyles({
    icon: {
      fontSize: "40px",
      color: "red",
      cursor: "pointer",
    },
  });
  const classes = useStyles();

  return (
    <div>
      {rol && (
        <div onClick={() => openModals({ type: "color", id })}>
          <Palette className={classes.icon} />
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (store) => ({
  rol: store.auth.rol,
});
const mapDispatch = dispatcher(["openModals"]);

export default connect(mapStateToProps, mapDispatch)(ColorPickerButton);
