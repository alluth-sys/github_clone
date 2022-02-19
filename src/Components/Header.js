import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";

//Github Icons
import GitHubIcon from "@mui/icons-material/GitHub";

//React Router
import { useLocation } from "react-router-dom";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#000000",
    fontFamily: "sans-serif",
    marginBottom: "auto",
  },
  toolbar: {
    display: "flex",
  },
}));

export default function Header() {
  const classes = useStyles();
  const location = useLocation();
  console.log(location.pathname);

  return (
    <AppBar position="static" className={classes.header}>
      <CssBaseline />
      <Toolbar className={classes.toolbar}>
        <GitHubIcon />
        <Typography variant="h6" style={{ marginLeft: "15px" }}>
          Github Repository Search
        </Typography>
        {location.pathname !== "/" ? (
          <Typography variant="h6" style={{ marginLeft: "15px" }}>
            Hi
          </Typography>
        ) : null}
      </Toolbar>
    </AppBar>
  );
}
