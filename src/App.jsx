import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Info from "./components/Info/Info";
import Team from "./components/Team/Team";
import Process from "./components/Proccess/Process";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <Carousel />
      <Info />
      <Team />
      <Process />
    </>
  );
}

export default App;