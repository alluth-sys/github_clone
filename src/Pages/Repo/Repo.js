import React from "react";
import { MainContext } from "../../Provider/MainProvider";
import { Navigate } from "react-router-dom";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import Spacer from "react-spacer";
import ClipLoader from "react-spinners/ClipLoader";
import RepoCard from "../../Components/RepoCard";

import { useLoadMoreRepos } from "../../Hooks/useAxios";

export default function Repo() {
  const { repo, isAuthed } = React.useContext(MainContext);
  const { hasMore, fetchRepos } = useLoadMoreRepos();

  if (!isAuthed) {
    return <Navigate to={"/"} />;
  } else {
    return (
      <InfiniteScroll
        loadMore={fetchRepos}
        hasMore={hasMore}
        loader={
          <div style={styles.loaderStyle} key={0}>
            <ClipLoader size={50} />
          </div>
        }
      >
        <div style={styles.container}>
          <div style={styles.inner}>
            {repo.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <div key={item.id}>
                    <RepoCard item={item} id={item.id} />
                    <Spacer height={"20px"} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          <div style={styles.inner}>
            {repo.map((item, index) => {
              if (index % 2 === 1) {
                return (
                  <div key={item.id}>
                    <RepoCard item={item} id={item.id} />
                    <Spacer height={"20px"} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </InfiniteScroll>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    height: "100%",
    paddingTop: "50px",
  },
  inner: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  loaderStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
