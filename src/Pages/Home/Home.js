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

//CSS
import styles from "./Home.module.css";

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
    <div className={styles.container}>
      <Breakpoint large up>
        <div className={styles["large-inner"]}>
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
            className={styles.textFieldStyle}
          />
          <Spacer height={"30px"} />

          <div style={{ display: "flex" }}>
            <div className={styles.button}>
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
            <div className={styles.button}>
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
        <div className={styles["medium-inner"]}>
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
            className={styles.textFieldStyle}
          />
          <Spacer height={"30px"} />

          <div style={{ display: "flex" }}>
            <div className={styles.button}>
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
            <div className={styles.button}>
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
        <div className={styles["small-inner"]}>
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
            className={styles.textFieldStyle}
          />
          <Spacer height={"30px"} />

          <div style={{ display: "flex" }}>
            <div className={styles.button}>
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
            <div className={styles.button}>
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
