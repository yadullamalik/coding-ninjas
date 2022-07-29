import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleShow } from "../Redux/action";

export const TimerComponent = () => {
  const show = useSelector((store) => store.show);
  const dispatch = useDispatch();
  const [min, setMin] = useState(Math.floor(Math.random() * (7 - 1) + 1));
  const [sec, setSec] = useState(59);

  const handleLocalStorage = () => {
    const payload = {
      min: min,
      sec: sec,
    };
    localStorage.setItem("time", JSON.stringify(payload));
  };

  const timeFun = () => {
    let id = setInterval(() => {
      setSec((prev) => {
        if (prev <= 0) {
          setMin((mprev) => {
            if (mprev <= 0 && prev <= 0) {
              setMin(0);
              setSec(0);
              clearInterval(id);
              alert("Ambulance Reached");
              dispatch(handleShow());
            }
            return mprev - 1;
          });
          setSec(59);
        }
        return prev - 1;
      });
    }, 1000);
  };
  useEffect(() => {
    const lTime = JSON.parse(localStorage.getItem("time"));
    if (lTime !== null) {
      setMin(lTime.min);
      setSec(lTime.sec);
    }
  }, []);
  useEffect(() => {
    handleLocalStorage();
  }, [min, sec]);

  useEffect(() => {
    timeFun();
  }, []);
  return (
    <div
      style={{
        textAlign: "center",
        height: "100%",
      }}
    >
      <h1 style={{}}>
        {min <= 9 ? `0${min}` : min} : {sec <= 9 ? `0${sec}` : sec}
      </h1>
    </div>
  );
};
