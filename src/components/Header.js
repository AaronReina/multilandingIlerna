import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Button,
  Hidden,
} from "@material-ui/core";

const styles = {
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
};

const Header = ({ classes }) => (
  <AppBar position="static">
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
);
export default withStyles(styles)(Header);
