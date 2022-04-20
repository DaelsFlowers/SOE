import "./bootstrap.min (2).css"
import './App.css';
import Part0 from "./PartsForm/Part0";
import Part1 from "./PartsForm/Part1";
import Part2 from "./PartsForm/Part2";
import Part3 from "./PartsForm/Part3";
import Part4 from "./PartsForm/Part4";
import Part5 from "./PartsForm/Part5";

import Navbar from "./Components/Navbar";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Part0 />
      <div className="formulario">
        <Part1 />
        <Part2 />
        <Part3 />
        <Part4 />
        <Part5 />
      </div>
    </div>
  );
}

export default App;
