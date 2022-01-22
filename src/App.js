import "./App.css";
import Location from "./pages/Location";
import Locations from "./pages/Locations";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Characters from "./pages/Characters";
import Character from "./pages/Character";

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route />
      </Routes> 
      <Characters />
      <Locations />
      <Location />*/}

      <Character />
    </BrowserRouter>
  );
}

export default App;
