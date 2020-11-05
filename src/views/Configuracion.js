import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Switch,
} from "@material-ui/core";
import { post } from "../services/calls";
import { dispatcher } from "../redux/actions/dispatchers";
const Contacto = ({ config, openModals, getText, rol }) => {
  const useStyles = makeStyles({});
  const classes = useStyles();
  const [title, setTitle] = useState();
  const [galleryOn, setGalleryOn] = useState(false);
  const [cardsNumber, setCardsNumber] = useState(10);
  const [menuText, setMenuText] = useState(false);
  const [cardText, setCardText] = useState(false);
  const [onConstruction, setOnConstruction] = useState(false);

  const saveText = async () => {
    try {
      const dataCall = {
        id: 1,
        htmlText: title,
      };
      const response = await post("changeText", dataCall);
      if (response?.ok) {
        getText();
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      {rol ? (
        <div>
          <h3>Principal</h3>
          <div>
            <p>
              Cambio de favicon (icono que aparece en la pestaña del navegador)
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
              Cambio de titulo (nombre que aparece en el menu y en la pestaña
              del navegador)
            </p>
            <TextField
              onChange={(e) => setTitle(e.target.value)}
              id="titulo"
              label="Titulo"
              value={title}
            />
            <Button
              variant="contained"
              onClick={() => saveText()}
              color="primary"
            >
              Cambiar titulo
            </Button>
          </div>
          <div>
            <p>opciones de galeria </p>
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
            <h3>Textos</h3>
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
          </div>
          <div>
            <h3>Contacto (No se mostrara nada si se deja en blanco)</h3>
            <div>
              <p>Link Instagram </p>
              <TextField
                onChange={(e) => setTitle(e.target.value)}
                id="titulo"
                label="Titulo"
                value={title}
              />
            </div>
            <div>
              <p>Link Facebook </p>
              <TextField
                onChange={(e) => setTitle(e.target.value)}
                id="titulo"
                label="Titulo"
                value={title}
              />
            </div>
            <div>
              <p>Link Pinterest </p>
              <TextField
                onChange={(e) => setTitle(e.target.value)}
                id="titulo"
                label="Titulo"
                value={title}
              />
            </div>
          </div>
          <div>
            <p>Link Twitter </p>
            <TextField
              onChange={(e) => setTitle(e.target.value)}
              id="titulo"
              label="Titulo"
              value={title}
            />
          </div>
          <div>
            <p>Email </p>
            <TextField
              onChange={(e) => setTitle(e.target.value)}
              id="titulo"
              label="Titulo"
              value={title}
            />
          </div>
          <div>
            <p>Telefono </p>
            <TextField
              onChange={(e) => setTitle(e.target.value)}
              id="titulo"
              label="Titulo"
              value={title}
            />
          </div>
          <div>
            <h3>En construccion</h3>
            <div>
              <p>
                Si marca la opcion se mostrara una pantalla "en construccion" en
                lugar de la web normal
              </p>
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
              <p>
                Una vez marcada esta opcion podra acceder al login desde un
                boton oculto situado en esa misma pantalla, para volver a la
                pagina original.
              </p>
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

const mapDispatch = dispatcher(["openModals", "getText"]);

export default connect(mapStateToProps, mapDispatch)(Contacto);
