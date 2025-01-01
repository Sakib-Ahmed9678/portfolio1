import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/home";
import AboutMe from "./Pages/About/AboutMe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Home />
        <AboutMe />
      </div>
    </>
  );
}

export default App;
