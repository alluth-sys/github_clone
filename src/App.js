import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

//Routes
import Home from "./Pages/Home/Home";
import Repo from "./Pages/Repo/Repo";
import RepoDetail from "./Pages/RepoDetail/RepoDetail";

//Header
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} showUser={false} />
        <Route path="/users/:username/repos" exact element={<Repo />} />
      </Routes>
    </Router>
  );
}

export default App;
