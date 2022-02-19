import React from "react";
import { MainContext } from "../../Provider/MainProvider";
import { Navigate } from "react-router-dom";

export default function Repo() {
  const { repo, isAuthed } = React.useContext(MainContext);
  console.log(repo);

  if (!isAuthed) {
    return <Navigate to={"/"} />;
  } else {
    return <div>Repo</div>;
  }
}
