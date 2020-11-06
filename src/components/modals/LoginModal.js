import React, { useState } from "react";
import { connect } from "react-redux";
import { dispatcher } from "../../redux/actions/dispatchers";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { post } from "../../services/calls";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    outline: "none",
    boxShadow: theme.shadows[5],
    width: "200px",
    height: "200px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
  },
}));

const LoginModal = ({ rol, closeModals, setRol }) => {
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleClose = () => {
    closeModals();
  };
  const login = async () => {
    const dataCall = {
      password,
      username,
    };
    try {
      const response = await post("login", dataCall);
      if (response.ok) {
        setRol(response.access);
        closeModals();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        open={true}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={true}>
          <div className={classes.paper}>
            <TextField
              onChange={(e) => setUsername(e.target.value)}
              id="user"
              label="Usuario"
              value={username}
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              label="Contraseña"
              value={password}
            />
            <Button onClick={() => login()} color="primary">
              Ingresar
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

const mapStateToProps = (store) => ({
  rol: store.auth.rol,
});

const mapDispatch = dispatcher(["closeModals", "setRol"]);

export default connect(mapStateToProps, mapDispatch)(LoginModal);
