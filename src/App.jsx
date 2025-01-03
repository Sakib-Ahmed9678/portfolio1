import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/home";
import AboutMe from "./Pages/About/AboutMe";
import Portfolio from "./Pages/portfolio";
import Contract from "./Pages/contract";
import Blog from "./Pages/blog";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <div>
          <Home />
          <AboutMe />
          <Portfolio />
          <Contract />
          <Blog />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
