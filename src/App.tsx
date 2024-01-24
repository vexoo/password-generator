import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Generator from "./components/Generator";

function App() {
  useEffect(() => {
    document.title = "Password Generator";
  }, []);

  return (
    <>
      <Header />
			<Generator />
    </>
  );
}

export default App;