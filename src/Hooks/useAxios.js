import { useState, useContext } from "react";
import axios from "axios";
import { MainContext } from "../Provider/MainProvider";

const baseURL = "https://api.github.com/users";

export const useGetUserRepos = ({ githubUser }) => {
  const { setUsername, setRepo } = useContext(MainContext);

  const [error, setError] = useState(false);
  const [loading, setloading] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  const fetchData = () => {
    setloading(true);
    axios
      .get(`${baseURL}/${githubUser}/repos`, {
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

//Implementing
export const useGetMoreData = () => {
  const { setRepo } = useContext(MainContext);
  const [error, setError] = useState(false);
  const [loading, setloading] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [pageNum, setPageNum] = useState(2);

  const fetchMoreData = () => {
    setloading(true);
    axios
      .get(`${baseURL}/${githubUser}/repos`, {
        params: {
          per_page: 10,
          page: pageNum,
        },
      })
      .then((res) => {
        setRepo(res.data);
        setError(false);
        setPageNum(pageNum + 1);
      })
      .catch((e) => {
        setErrMessage(e);
        setError(true);
      })
      .finally(() => {
        setloading(false);
      });
  };
};
