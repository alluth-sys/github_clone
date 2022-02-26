import React from "react";
import { MainContext } from "../../Provider/MainProvider";
import { Navigate } from "react-router-dom";
import { useFetchRepoData } from "../../Hooks/useAxios";
import ClipLoader from "react-spinners/ClipLoader";

//MUI LIB
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

//Spacer
import Spacer from "react-spacer";

//Icon
import {
  LogoGithubIcon,
  RepoIcon,
  RepoForkedIcon,
  StarIcon,
  EyeIcon,
} from "@primer/octicons-react";

export default function RepoDetail() {
  const { isAuthed } = React.useContext(MainContext);
  const { fetchRepoData, repoData, loading } = useFetchRepoData();

  const openGithubHandler = () => {
    window.open(repoData.html_url);
  };

  React.useEffect(() => {
    if (isAuthed) {
      fetchRepoData();
    }
  }, []);

  if (!isAuthed) {
    return <Navigate to={"/"} />;
  } else {
    return (
      <div style={loading ? styles.loadingContainer : styles.contentContainer}>
        {!loading && repoData ? (
          <React.Fragment>
            <div style={styles.titleStyle}>
              <RepoIcon size={30} />
              <Spacer width={"5px"} />
              <Typography variant="h5" gutterBottom component="div">
                {repoData.full_name}
              </Typography>
            </div>
            <div style={styles.titleStyle}>
              <Typography
                variant="subtitle1"
                gutterBottom
                component="div"
                style={{ color: "#808080" }}
              >
                {repoData.description}
              </Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={styles.titleStyle}>
                <StarIcon size={16} />
                <Typography variant="subtitle1" component="div">
                  {repoData.stargazers_count}
                </Typography>
              </div>
              <Spacer width={"10px"} />
              <div style={styles.titleStyle}>
                <EyeIcon size={16} />
                <Typography variant="subtitle1" component="div">
                  {repoData.watchers_count}
                </Typography>
              </div>
              <Spacer width={"10px"} />
              <div style={styles.titleStyle}>
                <RepoForkedIcon size={16} />
                <Typography variant="subtitle1" component="div">
                  {repoData.forks_count}
                </Typography>
              </div>
              <Spacer width={"10px"} />
              <div style={styles.titleStyle} onClick={openGithubHandler}>
                <IconButton style={styles.buttonStyle}>
                  <LogoGithubIcon />
                </IconButton>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <ClipLoader size={100} />
        )}
      </div>
    );
  }
}

const styles = {
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  contentContainer: {
    padding: "50px",
  },
  titleStyle: {
    display: "flex",
    alignItems: "center",
  },
  buttonStyle: {
    color: "black",
    borderRadius: 10,
  },
};
