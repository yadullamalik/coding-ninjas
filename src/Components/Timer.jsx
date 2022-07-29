import { Google_Map } from "./GoogleMap";
import styles from "./Timer.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { TimerComponent } from "./TimerComponent";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Hospital } from "./Hospital";

export const Timer = () => {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [city, setCity] = useState("");
  const [precations, setPrecautions] = useState(null);
  const [data, setData] = useState([]);

  const api = `219129ee37e58d8b52ff71f8047ecd1b`;
  const api_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
  const req = `${api_endpoint}lat=${lat}&lon=${lon}&appid=${api}`;

  useEffect(() => {
    axios.get("https://codingpandas.herokuapp.com/hospital").then((r) => {
      setData(r.data);
    });
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
      axios.get(req).then((res) => {
        setCity(res.data.name);
      });
    });
  }, [lat]);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.city}>
          city name:
          <h1>{city}</h1>
        </div>
        <div className={styles.main_timer}>
          <div className={styles.time_div}>
            <TimerComponent />
          </div>
          <div className={styles.hospital}>
            <Hospital data={data} />
          </div>
        </div>
        <div className={styles.googlemap}>
          <h1>
            <Google_Map lat={lat} lon={lon} city={city} />
          </h1>
        </div>
      </div>
      <div className={styles.precautions}>
        <div
          onClick={() => {
            if (precations == "heartattack") {
              setPrecautions(null);
            } else {
              setPrecautions("heartattack");
            }
          }}
        >
          <h1>Heart Attack </h1>
          <span className={styles.icon}>
            {precations == "heartattack" ? (
              <IoIosArrowUp />
            ) : (
              <IoIosArrowDown />
            )}
          </span>
        </div>
        <div
          onClick={() => {
            if (precations == "accident") {
              setPrecautions(null);
            } else {
              setPrecautions("accident");
            }
          }}
        >
          <h1>Accident </h1>
          <span className={styles.icon}>
            {precations == "accident" ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </div>
        <div
          onClick={() => {
            if (precations == "pregnancy") {
              setPrecautions(null);
            } else {
              setPrecautions("pregnancy");
            }
          }}
        >
          <h1>pregnancy </h1>
          <span className={styles.icon}>
            {precations == "pregnancy" ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </div>
      </div>
      <div>
        {precations == "heartattack" && (
          <div>
            <img
              src="https://i.pinimg.com/originals/ef/9a/99/ef9a99a198b2114a91ab6a2a7e8b39d0.jpg"
              style={{
                width: "700px",
                marginRight: "50px",
              }}
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0329/0333/products/pool_resuscitation_chart_450x.png?v=1571438609"
              style={{
                width: "500px",
                marginBottom: "-150px",
              }}
            />
          </div>
        )}
        {precations == "accident" && (
          <div
            style={{
              width: "1200px",
              margin: "auto",
              fontSize: "20px",
              textAlign: "start",
            }}
          >
            <h2>IMMEDIATE REQUIREMENT</h2>
            <p>
              Critical four minutes - One of the most common causes of a d
              accident death is due to loss of oxygen supply. This is mostly
              caused by a blocked airway.
            </p>
            <p>Remember:</p>
            <ul>
              <li>Make the Scene safe</li>
              <li>Look for the injured</li>
              <li>Assist them</li>
              <li>Call help & Look for the unconscious victims</li>
            </ul>
            <h2>Follow the rule of ABC</h2>
            <p>Clearing Airway</p>
            <ol>
              <li>Airway - Clear the airway i.e. breathing track</li>
              <li>
                Breathing - Help restore it by mouth to mouth resuscitation
              </li>
              <li>Circulation - Stop any bleeding</li>
            </ol>
            <h2>Clearing Airway</h2>
            <ul>
              <li>
                Put the victim on ground very gently and cautiously without
                vigorous handling to prevent further injury.
              </li>
              <li>Turn the victim to one side.</li>
              <li>Loosen clothing at neck, chest and waist.</li>
              <li>
                Tilt the head back, point the face slightly down so the tongue
                can fall forward allowing blood and vomit to drain out.
              </li>
              <li>Remove dirt, blood, vomit or loose teeth from mouth.</li>
            </ul>
          </div>
        )}
        {precations == "pregnancy" && (
          <div
            style={{
              width: "1200px",
              margin: "auto",
              fontSize: "20px",
              textAlign: "start",
            }}
          >
            <h2>What to do in an emergency delivery situation</h2>
            <p>
              If your baby is coming and you can’t make it to the hospital, call
              911 as soon as you can. Then remove your pants and underwear. Lie
              down or sit propped up (standing or squatting could result in the
              baby falling and suffering serious injury). Try to stay calm, and
              practice deep breathing. When the urge to push becomes
              overwhelming, push for counts of five then pause and breathe. Do
              your best to gently guide the baby out as it emerges from your
              pelvis, and carefully unloop the umbilical cord if it’s wrapped
              around the baby’s body or neck.
            </p>
            <p>Immediately after the baby comes, follow these steps:</p>
            <ul>
              <li>
                Dry off the baby and place the baby directly on your chest to
                keep it warm.
              </li>
              <li>
                If the baby doesn’t immediately start to cry, run your fingers
                along either side of its nose to ease away mucus, and stimulate
                the baby’s skin as Jenea did by rubbing firmly but gently on its
                back with a piece of clothing or a dry towel.
              </li>
              <li>
                If you have two strings of any kind handy (a shoelace, thread,
                or a ribbon, for example), tie one string around the umbilical
                cord four to five inches away from the baby’s belly. Tie the
                other further from the baby two to three inches past the first
                string. Then cut the cord with a scissors or knife between the
                two ties. This way, when you do skin-to-skin contact against
                your chest, the baby is protected from potential bleeding if the
                cord were to tear away from the belly button.
              </li>
              <li>
                Seek medical care as soon as possible after delivery. Home
                births, whether planned or unplanned, can be risky for mothers
                and babies during and after delivery.
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
