import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.js";
import Home from "./pages/Home.js";
import SuperFam from "./pages/SuperFam.js";
import Xbox from "./pages/Xbox.js";
import Ps2 from "./pages/Ps2.js";
import ThreeDS from "./pages/ThreeDS.js";
import NSwitch from "./pages/NSwitch.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="SuperFam" element={<SuperFam />} />
          <Route path="Xbox" element={<Xbox />} />
          <Route path="Ps2" element={<Ps2 />} />
          <Route path="ThreeDS" element={<ThreeDS />} />
          <Route path="NSwitch" element={<NSwitch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
