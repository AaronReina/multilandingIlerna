import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import { connect } from "react-redux";
import { dispatcher } from "./redux/actions/dispatchers";
import CircularProgress from "@material-ui/core/CircularProgress";
import ColorPickerModal from "./components/modals/ColorPickerModal";
import TextModal from "./components/modals/TextModal";
import "./App.css";
import UploadModal from "./components/modals/UploadModal";

const App = ({
  getColors,
  getText,
  getImages,
  colors,
  text,
  images,
  state,
  openModals,
  modal,
}) => {
  const [componentReady, setComponentReady] = useState(false);

  useEffect(() => {
    getColors();
    getImages();
    getText();
  }, []);

  useEffect(() => {
    if (colors && text && images) {
      setComponentReady(true);
    }
  }, [colors, text, images]);

  return (
    <div>
      {images && <img src={`data:image;base64,${images[0].image}`} />}
      {componentReady ? (
        <div>
          <Header />
          <Main />
        </div>
      ) : (
        <CircularProgress />
      )}
      {modal?.type === "color" && <ColorPickerModal id={modal?.id} />}
      {modal?.type === "text" && <TextModal id={modal?.id} />}
      {modal?.type === "upload" && <UploadModal id={modal?.id} />}

      <button onClick={() => openModals({ type: "color", id: 0 })}>
        color
      </button>
      <button onClick={() => openModals({ type: "text", id: 0 })}>texto</button>
      <button onClick={() => openModals({ type: "upload", id: 0 })}>
        upload
      </button>
    </div>
  );
};

const mapStateToProps = (store) => ({
  colors: store.data.colors,
  text: store.data.text,
  images: store.data.images,
  modal: store.modal,
  state: store,
});
const mapDispatch = dispatcher([
  "getColors",
  "getText",
  "getImages",
  "openModals",
]);

export default connect(mapStateToProps, mapDispatch)(App);
