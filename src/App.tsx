import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import GeneratorSettings from "./components/GeneratorSettings";

function App() {
  useEffect(() => {
    document.title = "Password Generator";
  }, []);

  return (
    <>
      <Header />
			<GeneratorSettings />
    </>
  );
}

export default App;