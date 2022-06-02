import "./bootstrap.min (2).css"
import './App.css';
import PreLoader1 from "./Components/preloader";

import Forms from "./Components/Form.js";
import loadingGif from "./Components/fonts/INTENTO2.gif"

import Navbar from "./Components/Navbar";

function App() {

  return (
    <>
      <header className="App-header">
        {/* <PreLoader1 /> */}
        {/* <PreLoader2 /> */}
        <PreLoader1 />
      </header>
    </>
  );
}

export default App;
