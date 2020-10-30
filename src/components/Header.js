import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { dispatcher } from "./../redux/actions/dispatchers";
import MenuIcon from "@material-ui/icons/Menu";

import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Hidden,
} from "@material-ui/core";
import ColorPicker from "./ColorPicker";

const Header = ({ colors }) => {
  const useStyles = makeStyles({
    headerBoxTitle: {
      width: "50%",
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
      color: "white",
    },
    navColor: {
      background: colors[0].color,
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
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <div className={classes.headerBoxTitle}>
            <Typography color="secondary" variant="h6">
              <Link className={classes.link} to="/">
                Inicio
              </Link>
            </Typography>
          </div>

          <div className={classes.headerBoxRoutes}>
            <Hidden smDown>
              <Link className={classes.link} to="/contacto">
                Contacto
              </Link>
              <Link className={classes.link} to="/galeria">
                Galeria
              </Link>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (store) => ({
  colors: store.data.colors,
  token: store.auth.token,
});

const mapDispatch = dispatcher(["getColors", "getText", "getImages"]);
export default connect(mapStateToProps, mapDispatch)(Header);
