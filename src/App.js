import React from "react";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import About from "./Components/About";
import aboutimage from "./images/Frame 19.png";
import aboutimage1 from "./images/download.png";
import Presentation from "./Components/Presentation";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About
        image={aboutimage}
        title="Comes with All You Need  For Daily Life"
        button="Get The App"
      />
      <Presentation />
      <About
        image={aboutimage1}
        title="Download And get the App Now"
        button="Download"
      />
      <Contact />
    </div>
  );
}

export default App;
