import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

//Routes
import Home from "./Pages/Home/Home";
import Repo from "./Pages/Repo/Repo";
import RepoDetail from "./Pages/RepoDetail/RepoDetail";

//Header
import Header from "./Components/Header";

//Responsive Web Design
import { BreakpointProvider } from "react-socks";

function App() {
  return (
    <BreakpointProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/users/:username/repos" exact element={<Repo />} />
          <Route
            path="/users/:username/repos/:reposName"
            exact
            element={<RepoDetail />}
          />
        </Routes>
      </Router>
    </BreakpointProvider>
  );
}

export default App;
