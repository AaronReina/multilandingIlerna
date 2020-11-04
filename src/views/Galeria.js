import React from "react";
import { connect } from "react-redux";
import ImageCard from "../components/ImageCard";
import ColoPickerButton from "../components/ColoPickerButton";
import { makeStyles } from "@material-ui/core/styles";
import { dispatcher } from "./../redux/actions/dispatchers";
const Galeria = ({ token, store, images, openModals, colors }) => {
  const useStyles = makeStyles({
    cardBox: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
    container: {
      backgroundColor: colors[2].color,
    },
    pickerContainer: {
      display: "flex",
      justifyContent: "center",
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.pickerContainer}>
        <ColoPickerButton id="3" />
      </div>

      <div className={classes.cardBox}>
        {images &&
          images.map((e, i) => {
            if (i > 9) {
              return;
            }
            return (
              <ImageCard
                key={e.id}
                image={e.image}
                info={e.info}
                id={e.id}
                openModals={openModals}
              />
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (store) => ({
  store: store,
  token: store.auth.token,
  images: store.data.images,
  colors: store.data.colors,
});

const mapDispatch = dispatcher(["addInfo", "setToken", "openModals"]);

export default connect(mapStateToProps, mapDispatch)(Galeria);
