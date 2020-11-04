import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import { makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { dispatcher } from "./redux/actions/dispatchers";
import CircularProgress from "@material-ui/core/CircularProgress";
import ColorPickerModal from "./components/modals/ColorPickerModal";
import TextModal from "./components/modals/TextModal";
import UploadModal from "./components/modals/UploadModal";
import FullImageModal from "./components/modals/FullImageModal";
import { Helmet } from "react-helmet";
import LoginModal from "./components/modals/LoginModal";

const App = ({
  getColors,
  getText,
  getImages,
  colors,
  text,
  images,
  openModals,
  modal,
}) => {
  const [componentReady, setComponentReady] = useState(false);
  const useStyles = makeStyles({
    circularProgressBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  });
  const classes = useStyles();

  // const algo = () => {
  //   var link =
  //     document.querySelector("link[rel*='icon']") ||
  //     document.createElement("link");
  //   link.type = "image/x-icon";
  //   link.rel = "shortcut icon";
  //   link.href = "http://www.stackoverflow.com/favicon.ico";
  //   document.getElementsByTagName("head")[0].appendChild(link);
  // };
  useEffect(() => {
    // algo();
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
    <div style={{ height: "100%" }}>
      {componentReady ? (
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{text[0].htmlText}</title>
            <link
              rel="icon"
              type="image/png"
              href={`data:image/x-icon;base64,${images[10].image}`}
              sizes="16x16"
            />
          </Helmet>
          <Header />
          <Main />
        </div>
      ) : (
        <div className={classes.circularProgressBox}>
          <CircularProgress size={100} />
        </div>
      )}
      {modal?.type === "color" && <ColorPickerModal id={modal?.id} />}
      {modal?.type === "text" && <TextModal id={modal?.id} />}
      {modal?.type === "upload" && <UploadModal id={modal?.id} />}
      {modal?.type === "fullImage" && <FullImageModal id={modal?.id} />}
      {modal?.type === "login" && <LoginModal />}

      {/* <button onClick={() => openModals({ type: "text", id: 0 })}>texto</button> */}
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
