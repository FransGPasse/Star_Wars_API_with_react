import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import PersonPage from "./pages/PersonPage";
import PeoplePage from "./pages/PeoplePage";
import AllFilmsPage from "./pages/AllFilmsPage";
import SingleFilmPage from "./pages/SingleFilmPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/people/:id" element={<PersonPage />} />
        <Route path="/films" element={<AllFilmsPage />} />
        <Route path="/films/:id" element={<SingleFilmPage />} />
      </Routes>
    </div>
  );
}

export default App;
