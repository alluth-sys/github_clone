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

//React Socks Breakpoint
import { Breakpoint } from "react-socks";

//React Router
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { MainContext } from "../Provider/MainProvider";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#000000",
    fontFamily: "sans-serif",
    marginBottom: "auto",
    position: "sticky",
    top: 0,
    left: 0,
    zIndex: 2,
  },
  toolbar: {
    display: "flex",
  },
}));

export default function Header() {
  const classes = useStyles();
  const location = useLocation();
  const { username, setUsername } = React.useContext(MainContext);

  let navigate = useNavigate();

  return (
    <React.Fragment>
      <Breakpoint large up>
        <AppBar position="static" className={classes.header}>
          <CssBaseline />
          <Toolbar className={classes.toolbar}>
            <GitHubIcon
              onClick={() => {
                setUsername("");
                navigate("/");
              }}
            />
            <Typography variant="h6" style={styles.headerTitle}>
              Github Repository Search
            </Typography>
            <div style={styles.headerUserTitle}>
              {location.pathname !== "/" ? (
                <Typography variant="subtitle1">{`Hi, ${username}`}</Typography>
              ) : null}
            </div>
          </Toolbar>
        </AppBar>
      </Breakpoint>
      <Breakpoint medium down>
        <AppBar position="static" className={classes.header}>
          <CssBaseline />
          <Toolbar className={classes.toolbar}>
            <GitHubIcon
              onClick={() => {
                setUsername("");
                navigate("/");
              }}
            />
            <Typography variant="subtitle1" style={styles.headerTitle}>
              Github Repository Search
            </Typography>
            <div style={styles.headerUserTitle}>
              {location.pathname !== "/" ? (
                <Typography variant="subtitle2">{`Hi, ${username}`}</Typography>
              ) : null}
            </div>
          </Toolbar>
        </AppBar>
      </Breakpoint>
    </React.Fragment>
  );
}

const styles = {
  headerTitle: {
    marginLeft: "15px",
    whiteSpace: "nowrap",
  },
  headerUserTitle: {
    display: "flex",
    width: "100vw",
    justifyContent: "flex-end",
  },
};
