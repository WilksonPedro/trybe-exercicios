import React from "react";
import Image from "./Image";
import staringCat from './staringCat.jpg';

function App() {
  return (
    <div className="App">
      <Image source={ staringCat } alternative="Cute cat starting" />
    </div>
  );
}

export default App;
