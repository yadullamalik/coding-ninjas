import { useState } from "react";
import "./App.css";
import { Button } from "./Components/Button";
import { Navbar } from "./Components/Navbar";
import { Timer } from "./Components/Timer";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <div
        onClick={() => {
          setShow(true);
        }}
      >
        {show ? <Timer /> : <Button />}
      </div>
    </div>
  );
}

export default App;
