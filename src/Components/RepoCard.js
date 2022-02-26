import React from "react";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

//Context API
import { MainContext } from "../Provider/MainProvider";

import Spacer from "react-spacer";

import { useNavigate } from "react-router-dom";
//Icon
import {
  LogoGithubIcon,
  RepoIcon,
  RepoForkedIcon,
  StarIcon,
  EyeIcon,
} from "@primer/octicons-react";

export default function RepoCard({ item, id }) {
  const { username, setSeletedRepo } = React.useContext(MainContext);
  let navigate = useNavigate();

  const onClickHandler = () => {
    setSeletedRepo(item.name);
    navigate(`/users/${username}/repos/${item.name}`);
  };

  const card = (
    <div key={id}>
      <CardContent>
        <LogoGithubIcon size={16} />
        <Spacer height={"10px"} />
        <div style={styles.titleStyle}>
          <RepoIcon size={16} />
          <Spacer width={"5px"} />
          <Typography>{item.name}</Typography>
        </div>
        <div style={styles.titleStyle}>
          <StarIcon size={16} />
          <Spacer width={"5px"} />
          <Typography>{item.stargazers_count}</Typography>
        </div>
        <div style={styles.titleStyle}>
          <EyeIcon size={16} />
          <Spacer width={"5px"} />
          <Typography>{item.watchers_count}</Typography>
        </div>
        <div style={styles.titleStyle}>
          <RepoForkedIcon size={16} />
          <Spacer width={"5px"} />
          <Typography>{item.forks_count}</Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">View Detail</Button>
      </CardActions>
      <Spacer height={"20px"} />
    </div>
  );

  return (
    <Card
      variant="outlined"
      sx={{
        bgcolor: "background.paper",
        borderRadius: 5,
        width: 400,
        maxHeight: 400,
        border: "1px solid #AAAAAA",
        overflow: "hidden",
      }}
      onClick={onClickHandler}
    >
      {card}
    </Card>
  );
}

const styles = {
  titleStyle: {
    display: "flex",
    alignItems: "center",
  },
};
