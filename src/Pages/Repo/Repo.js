import React from "react";
import { MainContext } from "../../Provider/MainProvider";
import { Navigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";
import Spacer from "react-spacer";
import ClipLoader from "react-spinners/ClipLoader";
import RepoCard from "../../Components/RepoCard";

import { useLoadMoreRepos } from "../../Hooks/useAxios";

//React Socks Breakpoint
import { Breakpoint } from "react-socks";

//CSS
import styles from "./Repo.module.css";

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
          <div className={styles.loader} key={0}>
            <ClipLoader size={50} />
          </div>
        }
      >
        <Breakpoint large up>
          <div className={styles.container}>
            <div className={styles.inner}>
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
            <div className={styles.inner}>
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
        </Breakpoint>
        <Breakpoint medium down>
          <div className={styles.container}>
            <div className={styles["mobile-inner"]}>
              {repo.map((item) => {
                return (
                  <div key={item.id}>
                    <RepoCard item={item} id={item.id} />
                    <Spacer height={"20px"} />
                  </div>
                );
              })}
            </div>
          </div>
        </Breakpoint>
      </InfiniteScroll>
    );
  }
}

// const styles = {
//   container: {
//     display: "flex",
//     height: "100%",
//     paddingTop: "50px",
//     paddingLeft: "10%",
//     paddingRight: "10%",
//   },
//   inner: {
//     width: "50%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//   },
//   loaderStyle: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   moblieInner: {
//     width: "100%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//   },
// };
