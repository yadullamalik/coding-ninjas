import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { Button } from "./Components/Button";
import { Navbar } from "./Components/Navbar";
import { Timer } from "./Components/Timer";

function App() {
  const reduxShow = useSelector((store) => store.show);
  const [show, setShow] = useState("button");
  useEffect(() => {
    if (reduxShow == "button") {
      setShow("button");
    }
  }, [reduxShow]);
  let time = JSON.parse(localStorage.getItem("time"));
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("show"));
    if (data == null || data.show == "button") {
      setShow("button");
    } else if (
      time != null &&
      data.show == "timer" &&
      time.min !== 0 &&
      time.sec !== 0
    ) {
      setShow("timer");
    }
  }, [show]);
  useEffect(() => {
    localStorage.setItem("show", JSON.stringify(show));
  }, [show]);
  useEffect(() => {
    if (time != null && time.min <= 0) {
      setShow("button");
    }
  }, [show]);
  return (
    <div className="App">
      <Navbar />
      <div
        onClick={() => {
          setShow("timer");
        }}
      >
        {show == "timer" ? <Timer /> : <Button />}
      </div>
    </div>
  );
}

export default App;
