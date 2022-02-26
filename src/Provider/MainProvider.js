import React from "react";

export const MainContext = React.createContext();

export default function MainProvider({ children }) {
  const [username, setUsername] = React.useState("");
  const [repo, setRepo] = React.useState(null);
  const [isAuthed, setIsAuthed] = React.useState(false);
  const [selectedRepo, setSeletedRepo] = React.useState(null);

  return (
    <MainContext.Provider
      value={{
        username,
        setUsername,
        repo,
        setRepo,
        isAuthed,
        setIsAuthed,
        selectedRepo,
        setSeletedRepo,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
