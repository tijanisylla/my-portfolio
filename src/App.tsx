import React from "react";
import "./App.css";
import { Home, About, Navbar, Projects, Contact } from "./components";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
