import React from "react";
import { Switch, Route } from "react-router-dom";
import Contacto from "./../views/Contacto";
import Configuracion from "./../views/Configuracion";
import Galeria from "./../views/Galeria";
import Inicio from "./../views/Inicio";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Inicio} />
    <Route path="/galeria" component={Galeria} />
    <Route path="/contacto" component={Contacto} />
    <Route path="/configuracion" component={Configuracion} />
  </Switch>
);
export default Main;
