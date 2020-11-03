import React, { useState, useEffect } from "react";
import { SketchPicker } from "react-color";
import { connect } from "react-redux";
import { dispatcher } from "../../redux/actions/dispatchers";
import { Paper, makeStyles } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { post } from "../../services/calls";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const ColorPickerModal = ({ text, id, closeModals }) => {
  const useStyles = makeStyles({
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

  const [localText, setLocalText] = useState(text && text[id]?.htmlText);

  const saveText = async () => {
    try {
      const dataCall = {
        id: id + 1,
        htmlText: localText,
      };
      const response = await post("changeText", dataCall);
      if (response?.ok) {
        closeModals();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const cancel = () => {
    closeModals();
  };

  return (
    <div>
      <div className={classes.cancelBox}>
        <Close className={classes.cancel} onClick={() => cancel()} />
      </div>
      <h2>Editor de contenidos</h2>
      <div className="App">
        <CKEditor
          editor={ClassicEditor}
          data={localText}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
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
    </div>
  );
};

const mapStateToProps = (store) => ({
  text: store.data.text,
});

const mapDispatch = dispatcher(["addColor", "closeModals"]);

export default connect(mapStateToProps, mapDispatch)(ColorPickerModal);
