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

export default function Home() {
  const [githubUser, setGithubUser] = React.useState("");
  const { loading, error, isValid, fetchData } = useGetUserRepos({
    githubUser: githubUser,
  });

  const { setIsAuthed } = React.useContext(MainContext);
  //Navigate to user page only when receiving good data
  let navigate = useNavigate();
  React.useEffect(() => {
    if (isValid) {
      navigate(`/users/${githubUser}/repos`);
      setIsAuthed(true);
    }
  }, [isValid, navigate]);

  return (
    <div style={styles.container}>
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
    </div>
  );
}

const styles = {
  container: {
    //border: "3px solid red",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //flexDirection: "column",
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
    width: "40%",
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
};
