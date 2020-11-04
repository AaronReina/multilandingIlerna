import React from "react";
import { connect } from "react-redux";
import { dispatcher } from "../../redux/actions/dispatchers";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

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

const LoginModal = ({ rol, closeModals }) => {
  const classes = useStyles();

  const handleClose = () => {
    closeModals();
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
            <TextField id="user" label="Usuario" defaultValue="" />
            <TextField id="password" label="Contraseña" defaultValue="" />
            <Button color="primary">Ingresar</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

const mapStateToProps = (store) => ({
  rol: store.auth.rol,
});

const mapDispatch = dispatcher(["closeModals"]);

export default connect(mapStateToProps, mapDispatch)(LoginModal);
