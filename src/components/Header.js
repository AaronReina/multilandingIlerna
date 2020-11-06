import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import ColorPickerButton from "./ColoPickerButton";
import { connect } from "react-redux";
import { dispatcher } from "./../redux/actions/dispatchers";
import MenuIcon from "@material-ui/icons/Menu";

import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Hidden,
  ListItem,
  ListItemText,
  Drawer,
  List,
} from "@material-ui/core";

const Header = ({ colors, text, rol, config }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const useStyles = makeStyles({
    headerBoxTitle: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    headerBoxRoutes: {
      width: "50%",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
    link: {
      textDecoration: "none",
      color: config.menuText ? "white" : "black",
    },
    navColor: {
      background: colors[0].color,
    },
    paper: {
      background: colors[3].color,
    },
    menuButton: {
      color: config.menuText ? "white" : "black",
    },
  });
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.navColor} position="static">
        <Toolbar>
          <Hidden smUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setMobileMenu(true)}
            >
              <MenuIcon />
            </IconButton>
            <Fragment>
              <Drawer
                classes={{ paper: classes.paper }}
                open={mobileMenu}
                onClose={() => setMobileMenu(false)}
              >
                <List>
                  <ListItem
                    button
                    key={"inicio"}
                    component={Link}
                    to="/"
                    className={classes.link}
                  >
                    <ListItemText primary={config.title} />
                  </ListItem>
                  {config?.galleryOn && (
                    <ListItem
                      button
                      key={"galeria"}
                      component={Link}
                      to="/galeria"
                      className={classes.link}
                    >
                      <ListItemText primary="Galeria" />
                    </ListItem>
                  )}
                  <ListItem
                    button
                    key={"Contacto"}
                    component={Link}
                    to="/contacto"
                    className={classes.link}
                  >
                    <ListItemText primary="Contacto" />
                  </ListItem>
                  {rol && (
                    <ListItem
                      button
                      key={"Configuracion"}
                      component={Link}
                      to="/configuracion"
                      className={classes.link}
                    >
                      <ListItemText primary="Configuracion" />
                    </ListItem>
                  )}
                </List>
                <ColorPickerButton id="4" />
              </Drawer>
            </Fragment>
          </Hidden>
          <div className={classes.headerBoxTitle}>
            <Typography variant="h5">
              <Link className={classes.link} to="/">
                {config.title}
              </Link>
            </Typography>
          </div>
          <ColorPickerButton id="1" />
          <Hidden smDown>
            <div className={classes.headerBoxRoutes}>
              {config?.galleryOn && (
                <Link className={classes.link} to="/galeria">
                  Galeria
                </Link>
              )}
              <Link className={classes.link} to="/contacto">
                Contacto
              </Link>
              {rol && (
                <Link className={classes.link} to="/configuracion">
                  Configuracion
                </Link>
              )}
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (store) => ({
  colors: store.data.colors,
  config: store.data.config,
  text: store.data.text,
  rol: store.auth.rol,
});

export default connect(mapStateToProps)(Header);
