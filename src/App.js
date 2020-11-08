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
import EnConstruccion from "./views/EnConstruccion";

const App = ({
  getColors,
  getText,
  getImages,
  getConfig,
  config,
  colors,
  text,
  images,
  modal,
  rol,
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
  useEffect(() => {
    getColors();
    getImages();
    getText();
    getConfig();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (colors && text && images && config) {
      setComponentReady(true);
    }
  }, [colors, text, images, config]);

  return (
    <div style={{ height: "100%" }}>
      {componentReady ? (
        config?.onConstruction && !rol ? (
          <div>
            <Helmet>
              <meta charSet="utf-8" />
              <title>En contrucción</title>
              <link
                rel="icon"
                type="image/png"
                href={`data:image/x-icon;base64,${images[10].image}`}
                sizes="16x16"
              />
            </Helmet>
            <EnConstruccion />
          </div>
        ) : (
          <div>
            <Helmet>
              <meta charSet="utf-8" />
              <title>{config.title}</title>
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
        )
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
    </div>
  );
};

const mapStateToProps = (store) => ({
  colors: store.data.colors,
  text: store.data.text,
  images: store.data.images,
  config: store.data.config,
  rol: store.auth.rol,
  modal: store.modal,
});
const mapDispatch = dispatcher([
  "getColors",
  "getText",
  "getImages",
  "getConfig",
  "openModals",
]);

export default connect(mapStateToProps, mapDispatch)(App);
