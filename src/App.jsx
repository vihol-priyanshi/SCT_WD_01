import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "../src/components/Footer";
import Home from "./components/Home";
import Features from "./components/Features";
import Download from "./components/Download";
import About from "./components/About";
import Contact from "./components/Contact";


// Layout with Navbar + Outlet for child routes
const Layout = () => (
  <>
    <Navbar />
     <Outlet/>
    <Footer/>
  </>
);

function App() {
  const [playerName, setPlayerName] = useState(""); // shared state
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        { index: true, element: <Home  playerName={playerName} setPlayerName={setPlayerName} /> }, // default route
        { path: "features", element: <Features /> },
        { path: "download", element: <Download /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact playerName={playerName} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

