import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Contacto from "./../views/Contacto";
import Configuracion from "./../views/Configuracion";
import Galeria from "./../views/Galeria";
import Inicio from "./../views/Inicio";

const Main = ({ config }) => (
  <Switch>
    <Route exact path="/" component={Inicio} />
    {config?.galleryOn && <Route path="/galeria" component={Galeria} />}{" "}
    <Route path="/contacto" component={Contacto} />
    <Route path="/configuracion" component={Configuracion} />
  </Switch>
);

const mapStateToProps = (store) => ({
  config: store.data.config,
});

export default connect(mapStateToProps)(Main);
