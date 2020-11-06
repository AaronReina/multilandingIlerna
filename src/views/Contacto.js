import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Pinterest,
  Twitter,
  YouTube,
  Email,
  PhoneIphone,
} from "@material-ui/icons";
import { dispatcher } from "./../redux/actions/dispatchers";
const Contacto = ({ openModals, config }) => {
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
      {config.social.facebook && (
        <Chip
          label={config.social.facebook}
          variant="outlined"
          color="primary"
          icon={<Facebook />}
        />
      )}
      {config.social.instagram && (
        <Chip
          label={config.social.instagram}
          variant="outlined"
          color="primary"
          icon={<Instagram />}
        />
      )}
      {config.social.linkedin && (
        <Chip
          label={config.social.linkedin}
          variant="outlined"
          color="primary"
          icon={<LinkedIn />}
        />
      )}
      {config.social.pinterest && (
        <Chip
          label={config.social.pinterest}
          variant="outlined"
          color="primary"
          icon={<Pinterest />}
        />
      )}
      {config.social.twitter && (
        <Chip
          label={config.social.twitter}
          variant="outlined"
          color="primary"
          icon={<Twitter />}
        />
      )}

      {config.social.youtube && (
        <Chip
          label={config.social.youtube}
          variant="outlined"
          color="primary"
          icon={<YouTube />}
        />
      )}

      {config.social.email && (
        <Chip
          label={config.social.email}
          variant="outlined"
          color="primary"
          icon={<Email />}
        />
      )}

      {config.social.telefono && (
        <Chip
          label={config.social.telefono}
          variant="outlined"
          color="primary"
          icon={<PhoneIphone />}
        />
      )}

      <div
        onClick={() => openModals({ type: "login" })}
        className={classes.hideButton}
      ></div>
    </div>
  );
};

const mapStateToProps = (store) => ({
  config: store.data.config,
  image: store.data.image,
  colors: store.data.colors,
  text: store.data.text,
});

const mapDispatch = dispatcher(["openModals"]);

export default connect(mapStateToProps, mapDispatch)(Contacto);
