import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Info from "./components/Info/Info";
import Team from "./components/Team/Team";
import Process from "./components/Proccess/Process";
import CaseStudy from "./components/CaseStudy/CaseStudy";
import Opinion from "./components/UserOpinion/Opinion";
import Article from "./components/Article/Article";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <Carousel />
      <Info />
      <Team />
      <Process />
      <CaseStudy />
      <Opinion />
      <Article />
      <Footer />
    </>
  );
}

export default App;
