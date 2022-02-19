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
      .get(`${baseURL}/${githubUser}/repos`)
      .then((res) => {
        setRepo(res.data);
        setUsername(githubUser.toLowerCase());
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
