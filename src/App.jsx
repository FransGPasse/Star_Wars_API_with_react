import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import PersonPage from "./pages/PersonPage";
import PeoplePage from "./pages/PeoplePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/person" element={<PersonPage />} />
      </Routes>
    </div>
  );
}

export default App;
