import React from "react";
import { connect } from "react-redux";
import { dispatcher } from "./../redux/actions/dispatchers";
const Inicio = ({ images }) => {
  return <div>inicio</div>;
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

export default connect(mapStateToProps, mapDispatch)(Inicio);
