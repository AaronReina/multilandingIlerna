import React from "react";
import { connect } from "react-redux";
import ImageCard from "../components/ImageCard";
import ColorPickerButton from "../components/ColoPickerButton";
import { makeStyles } from "@material-ui/core/styles";
import { dispatcher } from "./../redux/actions/dispatchers";
const Galeria = ({ images, openModals, colors, config }) => {
  const useStyles = makeStyles({
    cardBox: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
    container: {
      backgroundColor: colors[2].color,
      minHeight: "94vh",
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
        <ColorPickerButton id="3" />
      </div>

      <div className={classes.cardBox}>
        {images &&
          images.map((e, i) => {
            if (i > config.cardsNumber - 1) {
              return false;
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
  images: store.data.images,
  config: store.data.config,
  colors: store.data.colors,
});

const mapDispatch = dispatcher(["openModals"]);

export default connect(mapStateToProps, mapDispatch)(Galeria);
