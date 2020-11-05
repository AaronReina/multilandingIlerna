import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { dispatcher } from "./../redux/actions/dispatchers";
const Contacto = ({ openModals }) => {
  const useStyles = makeStyles({
    hideButton: {
      width: "5vh",
      height: "5vh",
      position: "fixed",
      top: "10%",
      left: "90%",
      cursor: "pointer",
    },
  });
  const classes = useStyles();
  return (
    <div>
      <div
        onClick={() => openModals({ type: "login" })}
        className={classes.hideButton}
      ></div>
      contacto
    </div>
  );
};

const mapStateToProps = (store) => ({});

const mapDispatch = dispatcher(["openModals"]);

export default connect(mapStateToProps, mapDispatch)(Contacto);
