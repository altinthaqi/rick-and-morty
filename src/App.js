import "./App.css";
import Location from "./pages/Location";
import Locations from "./pages/Locations";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Navigation from "./layout/Navigation";
import Episodes from "./pages/Episodes";
import Episode from "./pages/Episode";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<Character />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<Episode />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:id" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
