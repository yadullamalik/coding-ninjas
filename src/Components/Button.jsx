import styles from "./Button.module.css";
import { FaHandHoldingMedical } from "react-icons/fa";

export const Button = () => {
  return (
    <div className={styles.main}>
      <h1>
        <FaHandHoldingMedical />
      </h1>
      <h1>Emergency</h1>
    </div>
  );
};
