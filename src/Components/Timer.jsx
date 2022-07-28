import { City } from "./City";
import { Google_Map } from "./GoogleMap";
import styles from "./Timer.module.css";

export const Timer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.city}>
        city name:
        <h1>
          <City />
        </h1>
      </div>
      <div className={styles.main_timer}>
        <div className={styles.time_div}>Time</div>
        <hr />
        <div className={styles.hospital}>Hospital</div>
      </div>
      <div className={styles.googlemap}>
        <h1>
          <Google_Map />
        </h1>
      </div>
    </div>
  );
};
