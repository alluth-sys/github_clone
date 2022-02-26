import { useState, useContext } from "react";
import axios from "axios";
import { MainContext } from "../Provider/MainProvider";
import { ConstructionOutlined } from "@mui/icons-material";

const baseURL = "https://api.github.com";

export const useGetUserRepos = ({ githubUser }) => {
  const { setUsername, setRepo } = useContext(MainContext);

  const [error, setError] = useState(false);
  const [loading, setloading] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  const fetchData = () => {
    setloading(true);
    axios
      .get(`${baseURL}/users/${githubUser}/repos`, {
        params: {
          per_page: 10,
        },
      })
      .then((res) => {
        setRepo(res.data);
        setUsername(githubUser);
        setError(false);
        setIsValid(true);
      })
      .catch((e) => {
        setErrMessage(e);
        setError(true);
      })
      .finally(() => {
        setloading(false);
      });
  };

  return { error, loading, errMessage, isValid, fetchData };
};

export const useLoadMoreRepos = () => {
  const { repo, username, setRepo } = useContext(MainContext);
  const [hasMore, setHasMore] = useState(true);
  const [pageNum, setPageNum] = useState(2); // first 10 was fetch during first render

  const fetchRepos = async () => {
    const response = await axios.get(`${baseURL}/users/${username}/repos`, {
      params: {
        per_page: 10,
        page: pageNum,
      },
    });

    if (response.status === 200) {
      if (response.data.length !== 0) {
        const newRepos = [...repo, ...response.data];
        setPageNum(pageNum + 1);
        setRepo(newRepos);

        //console.log(newRepos);
      } else {
        setHasMore(false);
      }
    }
    if (response.status !== 200) {
      alert("Something went wrong, please try again later");
    }
  };

  return { hasMore, fetchRepos };
};

export const useFetchRepoData = () => {
  const { username, selectedRepo } = useContext(MainContext);
  const [repoData, setRepoData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchRepoData = async () => {
    setLoading(true);
    if (selectedRepo && username) {
      const response = await axios.get(
        `${baseURL}/repos/${username}/${selectedRepo}`
      );
      if (response.status === 200) {
        setRepoData(response.data);
        setLoading(false);
      }
      if (response.status !== 200) {
        alert("Something went wrong, please try again later");
        setLoading(false);
      }
    }
    setLoading(false);
  };

  return { fetchRepoData, repoData, loading };
};
