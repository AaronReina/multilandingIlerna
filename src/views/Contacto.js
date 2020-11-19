import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, Button } from "@material-ui/core";
import ChangeButton from "./../components/ChangeButton";
import parse from "html-react-parser";
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
const Contacto = ({ openModals, config, images, rol, colors, text }) => {
  const useStyles = makeStyles({
    hideButton: {
      width: "5vh",
      height: "5vh",
      position: "fixed",
      top: "10%",
      left: "90%",
      cursor: "pointer",
    },
    pointer: {
      paddingLeft: "8px",
      margin: "20px",
      width: "130px",
      cursor: "pointer",
      color: colors[6].color,
      borderColor: colors[6].color,
      display: "flex",
      justifyContent: "flex-start",
    },
    socialBox: {
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    img: {
      width: "100%",
      maxHeight: "93vh",
      height: "auto",
    },
    center: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    backColor: {
      background: colors[4].color,
      minHeight: "93vh",
      color: config.contactText ? "white" : "black",
    },
    padding: {
      padding: "15px",
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.backColor}>
      <img
        className={classes.img}
        alt="Contacto"
        src={`data:image;base64,${images[12].image}`}
      />
      {rol && (
        <div>
          <Button
            onClick={() => openModals({ type: "upload", id: 13 })}
            size="small"
            color="secondary"
          >
            Cambiar imagen
          </Button>
          <ChangeButton id="5" />
        </div>
      )}
      <div className={classes.padding}>
        {text[1]?.htmlText && parse(text[1].htmlText)}
        <ChangeButton type="text" id="2" />
      </div>
      <div>
        <ChangeButton id="7" />

        <div className={classes.socialBox}>
          {config.social.facebook && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={config.social.facebook}
              style={{ textDecoration: "none" }}
            >
              <Chip
                className={classes.pointer}
                label="Facebook"
                variant="outlined"
                color="primary"
                icon={<Facebook />}
              />
            </a>
          )}
          {config.social.instagram && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={config.social.instagram}
              style={{ textDecoration: "none" }}
            >
              <Chip
                className={classes.pointer}
                label="Instagram"
                variant="outlined"
                color="primary"
                icon={<Instagram />}
              />
            </a>
          )}
          {config.social.linkedin && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={config.social.linkedin}
              style={{ textDecoration: "none" }}
            >
              <Chip
                className={classes.pointer}
                label="LinkedIn"
                variant="outlined"
                color="primary"
                icon={<LinkedIn />}
              />
            </a>
          )}
          {config.social.pinterest && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={config.social.pinterest}
              style={{ textDecoration: "none" }}
            >
              <Chip
                className={classes.pointer}
                label="Pinterest"
                variant="outlined"
                color="primary"
                icon={<Pinterest />}
              />
            </a>
          )}
          {config.social.twitter && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={config.social.twitter}
              style={{ textDecoration: "none" }}
            >
              <Chip
                className={classes.pointer}
                label="Twitter"
                variant="outlined"
                color="primary"
                icon={<Twitter />}
              />
            </a>
          )}

          {config.social.youtube && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={config.social.youtube}
              style={{ textDecoration: "none" }}
            >
              <Chip
                className={classes.pointer}
                label="YouTube"
                variant="outlined"
                color="primary"
                icon={<YouTube />}
              />
            </a>
          )}

          {config.social.email && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={config.social.email}
              style={{ textDecoration: "none" }}
            >
              <Chip
                className={classes.pointer}
                label="Email"
                variant="outlined"
                color="primary"
                icon={<Email />}
              />
            </a>
          )}

          {config.social.telefono && (
            <Chip
              className={classes.pointer}
              label={config.social.telefono}
              variant="outlined"
              color="primary"
              icon={<PhoneIphone />}
            />
          )}
        </div>
      </div>
      <div
        onClick={() => openModals({ type: "login" })}
        className={classes.hideButton}
      ></div>
    </div>
  );
};

const mapStateToProps = (store) => ({
  config: store.data.config,
  images: store.data.images,
  rol: store.auth.rol,
  colors: store.data.colors,
  text: store.data.text,
});

const mapDispatch = dispatcher(["openModals"]);

export default connect(mapStateToProps, mapDispatch)(Contacto);
