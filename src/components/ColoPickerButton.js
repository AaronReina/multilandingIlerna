import React from "react";
import { Palette } from "@material-ui/icons";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { dispatcher } from "./../redux/actions/dispatchers";

const ColorPickerButton = ({ id, openModals }) => {
  const useStyles = makeStyles({
    icon: {
      fontSize: "40px",
      color: "red",
      cursor: "pointer",
    },
  });
  const classes = useStyles();

  return (
    <div onClick={() => openModals({ type: "color", id })}>
      <Palette className={classes.icon} />
    </div>
  );
};

const mapDispatch = dispatcher(["openModals"]);

export default connect(null, mapDispatch)(ColorPickerButton);
