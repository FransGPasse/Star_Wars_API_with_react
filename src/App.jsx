import { Routes, Route } from "react-router-dom";
import PersonPage from "./pages/PersonPage";
import PeoplePage from "./pages/PeoplePage";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/people" element={<PeoplePage />} />
      </Routes>
    </div>
  );
}

export default App;
