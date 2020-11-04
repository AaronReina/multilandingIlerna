import React from "react";
import { connect } from "react-redux";
import { dispatcher } from "./../../redux/actions/dispatchers";
import { makeStyles } from "@material-ui/core/styles";
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
    width: "60%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "100%",
    height: "auto",
  },
}));

const FullImageModal = ({ id, images, closeModals }) => {
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
            <img
              className={classes.img}
              src={`data:image;base64,${images[id - 1].image}`}
              title={images[id - 1].info}
            />{" "}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

const mapStateToProps = (store) => ({
  images: store.data.images,
});

const mapDispatch = dispatcher(["closeModals"]);

export default connect(mapStateToProps, mapDispatch)(FullImageModal);
