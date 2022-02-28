import React from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

import Spacer from "react-spacer";
import ClipLoader from "react-spinners/ClipLoader";

import { useGetUserRepos } from "../../Hooks/useAxios";
import { MainContext } from "../../Provider/MainProvider";

//React Socks Breakpoint
import { Breakpoint } from "react-socks";

export default function Home() {
  const [githubUser, setGithubUser] = React.useState("");
  const { loading, error, isValid, fetchData } = useGetUserRepos({
    githubUser: githubUser,
  });
  const { setIsAuthed } = React.useContext(MainContext);

  let navigate = useNavigate();
  React.useEffect(() => {
    if (isValid) {
      navigate(`/users/${githubUser}/repos`, { replace: true });
      setIsAuthed(true);
    }
  }, [isValid, navigate]);

  return (
    <div style={styles.container}>
      <Breakpoint large up>
        <div style={styles.inner}>
          <TextField
            error={error}
            label="Username"
            variant="outlined"
            value={githubUser}
            onChange={(e) => {
              setGithubUser(e.target.value);
            }}
            autoFocus
            helperText={
              error ? "User not found" : "Please enter your Github username"
            }
            style={styles.textFieldStyle}
          />
          <Spacer height={"30px"} />

          <div style={{ display: "flex" }}>
            <div style={styles.buttonStyle}>
              {!loading ? (
                <Button
                  variant="contained"
                  onClick={fetchData}
                  endIcon={<SearchIcon />}
                >
                  Search
                </Button>
              ) : (
                <ClipLoader size={20} />
              )}
            </div>

            <Spacer width={"30px"} />
            <div style={styles.buttonStyle}>
              <Button
                variant="contained"
                style={{ backgroundColor: "orange" }}
                onClick={() => {
                  setGithubUser("");
                }}
                endIcon={<RestartAltIcon />}
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </Breakpoint>

      <Breakpoint medium only>
        <div style={styles.tabletInner}>
          <TextField
            error={error}
            label="Username"
            variant="outlined"
            value={githubUser}
            onChange={(e) => {
              setGithubUser(e.target.value);
            }}
            autoFocus
            helperText={
              error ? "User not found" : "Please enter your Github username"
            }
            style={styles.tabletTextFieldStyle}
          />
          <Spacer height={"30px"} />

          <div style={{ display: "flex" }}>
            <div style={styles.tabletButtonStyle}>
              {!loading ? (
                <Button
                  variant="contained"
                  onClick={fetchData}
                  endIcon={<SearchIcon />}
                >
                  Search
                </Button>
              ) : (
                <ClipLoader size={20} />
              )}
            </div>

            <Spacer width={"30px"} />
            <div style={styles.tabletButtonStyle}>
              <Button
                variant="contained"
                style={{ backgroundColor: "orange" }}
                onClick={() => {
                  setGithubUser("");
                }}
                endIcon={<RestartAltIcon />}
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </Breakpoint>
      <Breakpoint small down>
        <div style={styles.mobileInner}>
          <TextField
            error={error}
            label="Username"
            variant="outlined"
            value={githubUser}
            onChange={(e) => {
              setGithubUser(e.target.value);
            }}
            autoFocus
            helperText={
              error ? "User not found" : "Please enter your Github username"
            }
            style={styles.mobileTextFieldStyle}
          />
          <Spacer height={"30px"} />

          <div style={{ display: "flex" }}>
            <div style={styles.mobileButtonStyle}>
              {!loading ? (
                <Button
                  variant="contained"
                  onClick={fetchData}
                  endIcon={<SearchIcon />}
                >
                  Search
                </Button>
              ) : (
                <ClipLoader size={20} />
              )}
            </div>

            <Spacer width={"30px"} />
            <div style={styles.mobileButtonStyle}>
              <Button
                variant="contained"
                style={{ backgroundColor: "orange" }}
                onClick={() => {
                  setGithubUser("");
                }}
                endIcon={<RestartAltIcon />}
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </Breakpoint>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    border: "3px solid #AAAAAA",
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingTop: "35px",
    paddingBottom: "35px",
    borderRadius: "20px",
    width: "30vw",
  },
  textFieldStyle: {
    width: "100%",
  },
  buttonStyle: {
    width: "130px",
    height: "45px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  mobileInner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    border: "3px solid #AAAAAA",
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingTop: "35px",
    paddingBottom: "35px",
    borderRadius: "20px",
    width: "90vw",
  },
  mobileTextFieldStyle: {
    width: "100%",
  },
  mobileButtonStyle: {
    width: "130px",
    height: "45px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  tabletInner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    border: "3px solid #AAAAAA",
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingTop: "35px",
    paddingBottom: "35px",
    borderRadius: "20px",
    width: "60vw",
  },
  tabletTextFieldStyle: {
    width: "100%",
  },
  tabletButtonStyle: {
    width: "130px",
    height: "45px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
};
