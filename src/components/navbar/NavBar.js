import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
  
      <AppBar position="static" style={{ marginBottom: 15 }}>
        <Typography variant="h6" color="inherit" className={classes.root}>
          Pixabay Gallery
        </Typography>
      </AppBar>

  );
};
export default NavBar;
