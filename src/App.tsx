import React, { useState } from "react";
import "./components/Style/App.css";
import { Home, About, Navbar, Projects, Contact } from "./components";

const App: React.FC = () => {
  const [IsdarkMode, setIsDarkMode] = useState<boolean>(false);
  // Handle Dark Mode function.
  const handleDarkMode = (): void => {
    setIsDarkMode(!IsdarkMode);
  };
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Contact />
      <Navbar />
    </div>
  );
};

export default App;
