import React, { useState } from "react";
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Features from "./components/Features";
import Download from "./components/Download";
import About from "./components/About";
import Contact from "./components/Contact";

// Layout as a Route wrapper with Outlet
const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

function App() {
  const [playerName, setPlayerName] = useState("");

  return (
    <HashRouter>
      <Routes>
        {/* Layout route */}
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Home playerName={playerName} setPlayerName={setPlayerName} />}
          />
          <Route path="features" element={<Features />} />
          <Route path="download" element={<Download />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact playerName={playerName} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
