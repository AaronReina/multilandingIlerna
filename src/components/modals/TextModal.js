import React, { useState } from "react";
import { connect } from "react-redux";
import { dispatcher } from "../../redux/actions/dispatchers";
import { makeStyles, Paper } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { post } from "../../services/calls";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const ColorPickerModal = ({ text, id, closeModals, getText }) => {
  const useStyles = makeStyles({
    paper: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "column",
      borderRadius: "5px",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    button: {
      padding: "5px 25px",
      color: "white",
      background: "rgb(70, 160, 80)",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },

    cancelBox: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    cancel: {
      cursor: "pointer",
      color: "red",
    },
  });
  const classes = useStyles();

  const [localText, setLocalText] = useState(text && text[id - 1]?.htmlText);

  const saveText = async () => {
    try {
      const dataCall = {
        id,
        htmlText: localText,
      };
      const response = await post("changeText", dataCall);
      if (response?.ok) {
        closeModals();
        getText();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const cancel = () => {
    closeModals();
  };

  return (
    <Paper className={classes.paper}>
      <div className={classes.cancelBox}>
        <Close className={classes.cancel} onClick={() => cancel()} />
      </div>
      <h2>Editor de contenidos</h2>
      <div className="App">
        <CKEditor
          editor={ClassicEditor}
          data={localText}
          config={{
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "blockQuote",
              "link",
              "numberedList",
              "bulletedList",
              "insertTable",
              "tableColumn",
              "tableRow",
              "mergeTableCells",
              "|",
              "undo",
              "redo",
            ],
          }}
          onReady={(editor) => {}}
          onChange={(event, editor) => {
            const data = editor.getData();
            setLocalText(data);
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
      <button className={classes.button} onClick={() => saveText()}>
        Guardar
      </button>
    </Paper>
  );
};

const mapStateToProps = (store) => ({
  text: store.data.text,
});

const mapDispatch = dispatcher(["closeModals", "getText"]);

export default connect(mapStateToProps, mapDispatch)(ColorPickerModal);
