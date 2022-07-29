import { useEffect } from "react";
import { useState } from "react";
import styles from "./Timer.module.css";

export const Hospital = ({ data }) => {
  let num = Math.floor(Math.random() * 6);
  const [d, setD] = useState([]);
  useEffect(() => {
    setD(data[num]);
  }, [data]);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Name: {d?.name}</h1>
      <div className={styles.flex}>
        <h3>Distance: {d?.distance}</h3>
        <h3>Time: {d?.time}</h3>
      </div>
    </div>
  );
};
