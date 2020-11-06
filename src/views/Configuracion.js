import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Switch,
  Paper,
} from "@material-ui/core";
import { post } from "../services/calls";
import { dispatcher } from "../redux/actions/dispatchers";
const Contacto = ({ config, openModals, rol, getConfig }) => {
  const useStyles = makeStyles({
    paper: {
      // width: "320px",
      margin: "20px",
      padding: "10px",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonContainer: {
      padding: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    colorRed: {
      color: "red",
    },
    socialContainer: {
      display: "flex",
      msFlexDirection: "row",
      flexWrap: "wrap",
    },
    socialBox: {
      margin: "5px",
    },
  });
  const classes = useStyles();
  const [title, setTitle] = useState(config.title);
  const [galleryOn, setGalleryOn] = useState(config.galleryOn);
  const [cardsNumber, setCardsNumber] = useState(config.cardsNumber);
  const [social, setSocial] = useState(config.social);
  const [menuText, setMenuText] = useState(config.menuText);
  const [cardText, setCardText] = useState(config.cardText);
  const [onConstruction, setOnConstruction] = useState(config.onConstruction);

  const saveConfig = async () => {
    try {
      const dataCall = {
        config: {
          title,
          galleryOn,
          cardsNumber,
          social,
          menuText,
          cardText,
          onConstruction,
        },
      };
      const response = await post("changeConfig", dataCall);
      if (response?.ok) {
        getConfig();
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      {rol ? (
        <div>
          <div className={classes.container}>
            <Paper className={classes.paper}>
              <div>
                <p>
                  Cambio de favicon (icono que aparece en la pestaña del
                  navegador)
                </p>
                <Button
                  variant="contained"
                  onClick={() => openModals({ type: "upload", id: 11 })}
                  color="primary"
                >
                  Cambiar favicon
                </Button>
              </div>
              <div>
                <p>
                  Cambio de titulo (nombre que aparece en el menu y en la
                  pestaña del navegador)
                </p>
                <TextField
                  onChange={(e) => setTitle(e.target.value)}
                  id="titulo"
                  label="Titulo"
                  value={title}
                />
              </div>
              <div>
                <p>Opciones de galeria </p>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={galleryOn}
                      onChange={() => setGalleryOn(!galleryOn)}
                      name="Gallery"
                      color="primary"
                    />
                  }
                  label="Galeria disponible"
                />
                {galleryOn && (
                  <TextField
                    onChange={(e) => {
                      if (e.target.value < 11) {
                        setCardsNumber(e.target.value);
                      } else if (e.target.value > 10) {
                        setCardsNumber(10);
                      }
                    }}
                    id="cards"
                    label="Numero de tarjetas (maximo 10)"
                    value={cardsNumber}
                  />
                )}
              </div>

              <div>
                <p>Color de los textos del menu </p>
                <FormControlLabel
                  control={
                    <Switch
                      checked={menuText}
                      onChange={() => setMenuText(!menuText)}
                      color="primary"
                      name="menu"
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  }
                  label={menuText ? "Blanco" : "Negro"}
                />
              </div>
              <div>
                <p>Color de los textos de las tarjetas de la galeria </p>
                <FormControlLabel
                  control={
                    <Switch
                      checked={cardText}
                      onChange={() => setCardText(!cardText)}
                      color="primary"
                      name="card"
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  }
                  label={cardText ? "Blanco" : "Negro"}
                />
              </div>
              <div className={classes.socialContainer}>
                <div className={classes.socialBox}>
                  <p>Link Instagram </p>
                  <TextField
                    onChange={(e) =>
                      setSocial({ ...social, instagram: e.target.value })
                    }
                    id="Instagram"
                    label="Instagram"
                    value={social.instagram}
                  />
                </div>
                <div className={classes.socialBox}>
                  <p>Link Facebook </p>
                  <TextField
                    onChange={(e) =>
                      setSocial({ ...social, facebook: e.target.value })
                    }
                    id="Facebook"
                    label="Facebook"
                    value={social.facebook}
                  />
                </div>
                <div className={classes.socialBox}>
                  <p>Link YouTube </p>
                  <TextField
                    onChange={(e) =>
                      setSocial({ ...social, youtube: e.target.value })
                    }
                    id="YouTube"
                    label="YouTube"
                    value={social.youtube}
                  />
                </div>
                <div className={classes.socialBox}>
                  <p>Link LinkedIn </p>
                  <TextField
                    onChange={(e) =>
                      setSocial({ ...social, linkedin: e.target.value })
                    }
                    id="LinkedIn"
                    label="LinkedIn"
                    value={social.linkedin}
                  />
                </div>
                <div className={classes.socialBox}>
                  <p>Link Pinterest </p>
                  <TextField
                    onChange={(e) =>
                      setSocial({ ...social, pinterest: e.target.value })
                    }
                    id="Pinterest"
                    label="Pinterest"
                    value={social.pinterest}
                  />
                </div>
                <div className={classes.socialBox}>
                  <p>Link Twitter </p>
                  <TextField
                    onChange={(e) =>
                      setSocial({ ...social, twitter: e.target.value })
                    }
                    id="Twitter"
                    label="Twitter"
                    value={social.twitter}
                  />
                </div>
                <div className={classes.socialBox}>
                  <p>Email </p>
                  <TextField
                    onChange={(e) =>
                      setSocial({ ...social, email: e.target.value })
                    }
                    id="Email"
                    label="Email"
                    value={social.email}
                  />
                </div>
                <div className={classes.socialBox}>
                  <p>Telefono </p>
                  <TextField
                    onChange={(e) =>
                      setSocial({ ...social, telefono: e.target.value })
                    }
                    id="Telefono"
                    label="Telefono"
                    value={social.telefono}
                  />
                </div>
              </div>
              <div>
                <p>Modo en construccion (impide entrar a la pagina)</p>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={onConstruction}
                      onChange={() => setOnConstruction(!onConstruction)}
                      name="onContruction"
                      color="primary"
                    />
                  }
                  label="Modo en construccion encendido"
                />
                {onConstruction && (
                  <p className={classes.colorRed}>
                    Si marca esta opcion solo podra acceder a la web logandose
                    desde el boton oculto disponible en la parte superior
                    derecha de la pantalla "en construccion"
                  </p>
                )}
              </div>
            </Paper>
          </div>
          <div>
            <div className={classes.buttonContainer}>
              <Button
                variant="contained"
                onClick={() => saveConfig()}
                color="primary"
              >
                Guardar
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <h3>Acceso no autorizado </h3>
      )}
    </div>
  );
};

const mapStateToProps = (store) => ({
  config: store.data.config,
  rol: store.auth.rol,
});

const mapDispatch = dispatcher(["openModals", "getConfig"]);

export default connect(mapStateToProps, mapDispatch)(Contacto);
