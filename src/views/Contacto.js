import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { dispatcher } from "./../redux/actions/dispatchers";
const Contacto = ({ token, store, openModals }) => {
  useEffect(() => {
    console.log(token);
    console.log(store);
  }, [token, store]);

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

const mapStateToProps = (store) => ({
  store: store,
  token: store.auth.token,
});

const mapDispatch = dispatcher(["addInfo", "setToken", "openModals"]);

export default connect(mapStateToProps, mapDispatch)(Contacto);
