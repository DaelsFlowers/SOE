import "./bootstrap.min (2).css"
import './App.css';

import Forms from "./Components/Form.js";

import Navbar from "./Components/Navbar";

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="formulario">
        <Forms />
      </div>
    </div>
  );
}

export default App;
