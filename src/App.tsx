import React, { useState, useEffect } from "react";
import "./components/Style/App.css";
import {
  Home,
  Header,
  About,
  Skills,
  Services,
  Qualification,
  Projects,
  Contact,
  Footer,
  ScrollUp,
} from "./components";

const App: React.FC = () => {
  const [IsdarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleIsDarkMode = (): void => {
    localStorage.setItem("isDarkMode", JSON.stringify(!IsdarkMode));
    setIsDarkMode(!IsdarkMode);
  };

  useEffect(() => {
    const isDark: boolean = localStorage.getItem("isDarkMode") === "true";
    setIsDarkMode(isDark);
  }, [IsdarkMode]);

  return (
    <div className={`App ${IsdarkMode ? "dark-whole-app App" : ""}`}>
      <Header
        IsdarkMode={IsdarkMode}
        setIsDarkMode={setIsDarkMode}
        toggleIsDarkMode={toggleIsDarkMode}
      />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default App;
