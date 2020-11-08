import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { dispatcher } from "../redux/actions/dispatchers";
const EnConstruccion = ({ openModals }) => {
  const useStyles = makeStyles({
    hideButton: {
      width: "5vh",
      height: "5vh",
      position: "fixed",
      top: "10%",
      left: "90%",
      cursor: "pointer",
    },
    img: {
      width: "auto",
      maxWidth: "100%",
      height: "auto",
    },
    center: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.center}>
      <img
        className={classes.img}
        alt="En Construcción"
        src={"/underConst.jpg"}
      />
      <div
        onClick={() => openModals({ type: "login" })}
        className={classes.hideButton}
      ></div>
    </div>
  );
};
const mapDispatch = dispatcher(["openModals"]);

export default connect(null, mapDispatch)(EnConstruccion);
