import React from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

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
      navigate("/users");
      setIsAuthed(true);
    }
  }, [isValid, navigate]);

  return (
    <div style={styles.container}>
      <TextField
        error={error}
        label="Username"
        variant="outlined"
        value={githubUser}
        onChange={(e) => {
          setGithubUser(e.target.value);
        }}
        autoFocus
      />
      <Spacer height={"15px"} />
      {!loading ? (
        <Button
          variant="contained"
          endIcon={<SearchIcon />}
          onClick={fetchData}
        >
          Search
        </Button>
      ) : (
        <ClipLoader size={20} />
      )}
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
    flexDirection: "column",
  },
};
