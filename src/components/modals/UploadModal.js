import React, { useState } from "react";
import { postFile } from "./../../services/calls";
import { Close, CloudQueue } from "@material-ui/icons";
import { connect } from "react-redux";
import { dispatcher } from "./../../redux/actions/dispatchers";
import { Paper, TextField, makeStyles } from "@material-ui/core";

const UploadModal = ({ closeModals, uploadDocument, recall, id }) => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const onFileChange = (event) => {
    event.preventDefault();
    setFile(event.target.files[0]);
    setName(event.target.files[0].name.slice(0, 50));
  };

  const onFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", file, file.name);
    formData.append("id", id);
    formData.append("fileName", name ? name : null);

    try {
      const response = await postFile("changeImage", formData);
      if (!response.error) {
        recall();
        reset();
      }
    } catch (e) {
      console.log(e);
    }
  };
  const reset = () => {
    setFile(null);
    setName("");
    closeModals();
  };

  const useStyles = makeStyles({
    paper: {
      width: "250px",
      height: "300px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "column",
      position: "absolute",
      borderRadius: "5px",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: "auto",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "200px",
      height: "150px",
    },
    uploadBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },

    uploadInput: {
      display: "none",
    },

    iconBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
      alignItems: "center",
    },

    center: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      alignItems: "center",
    },

    close: {
      cursor: "pointer",
      position: "absolute",
      top: "5px",
      right: "5px",
    },
    buttonAccept: {
      boxShadow: "inset 0px 1px 3px 0px #3dc21b",
      background: "linear-gradient(to bottom, #44c767 5%, #5cbf2a 100%)",
      backgroundColor: "#44c767",
      borderRadius: "5px",
      border: "1px solid #18ab29",
      display: "inline-block",
      cursor: "pointer",
      color: "#ffffff",
      fontFamily: "Arial",
      fontSize: "16px",
      fontWeight: "bold",
      padding: "2px 20px",
      textDecoration: "none",
      textShadow: "0px -1px 0px #2f6627",
    },

    buttonCancel: {
      boxShadow: "inset 0px 1px 3px 0px #f29c93",
      background: "linear-gradient(to bottom, #fe1a00 5%, #ce0100 100%)",
      backgroundColor: "#fe1a00",
      borderRadius: "5px",
      border: "1px solid #d83526",
      display: "inline-block",
      cursor: "pointer",
      color: "#ffffff",
      fontFamily: "Arial",
      fontSize: "16px",
      fontWeight: "bold",
      padding: "2px 20px",
      textDecoration: "none",
      textShadow: "0px -1px 0px #b23e35",
    },
  });
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <h3>Subir documento</h3>
      {file && (
        <div className={classes.center}>
          <TextField
            label="Inserte nombre para renombrar archivo"
            maxLength="50"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      )}
      <div className={classes.center}>
        <div className={classes.container}>
          {file ? (
            <div>Archivo seleccionado</div>
          ) : (
            <div>Seleccione un archivo</div>
          )}
          {file && <strong>{file.name}</strong>}

          <div className={classes.uploadBox}>
            {file ? (
              <div className={classes.iconBox}>
                <button
                  onClick={() => {
                    setFile(null);
                    setName("");
                  }}
                  className={classes.buttonCancel}
                >
                  Cancelar
                </button>

                <button
                  className={classes.buttonAccept}
                  onClick={() => onFileUpload()}
                >
                  Subir
                </button>
              </div>
            ) : (
              <div>
                <label for="file-input" className="pointer">
                  <CloudQueue
                    title="Buscar archivo"
                    size={75}
                    color={"#007bff"}
                  />
                </label>
                <input
                  className={classes.uploadInput}
                  id="file-input"
                  type="file"
                  name="customFile"
                  onChange={onFileChange}
                  label="Seleccion un archivo"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div onClick={() => reset()} className={classes.close}>
        <Close title="Cerrar" size={30} color="secondary" />
      </div>
    </Paper>
  );
};

const mapDispatch = dispatcher(["closeModals"]);

export default connect(null, mapDispatch)(UploadModal);
