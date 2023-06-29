import { Fragment, useEffect, useState } from "react";
import Light from "../Light/Light";
import "./Traffic.css";
import { clear } from "@testing-library/user-event/dist/clear";

const Lights = {
  Red: {
    color: "red",
    time: 5,
  },
  Yellow: {
    color: "yellow",
    time: 2,
  },
  Green: {
    color: "green",
    time: 5,
  },
};

function Traffic() {
  const [light, setLight] = useState(Lights.Red);

  useEffect(() => {
    setTimeout(() => {
      handleNext();
    }, 1000 * light.time);
  }, [light]);
  const handleNext = () => {
    if (light === Lights.Red) {
      setLight(() => Lights.Yellow);
      return;
    }
    if (light === Lights.Yellow) {
      setLight(() => Lights.Green);
      return;
    }
    if (light === Lights.Green) {
      setLight(() => Lights.Red);
      return;
    }
  };
  return (
    <Fragment>
      <div className="traffic-light">
        <Light color={Lights.Red.color} isOn={light === Lights.Red} />
        <Light color={Lights.Yellow.color} isOn={light === Lights.Yellow} />
        <Light color={Lights.Green.color} isOn={light === Lights.Green} />
      </div>
      <button onClick={handleNext}>Next</button>
    </Fragment>
  );
}

export default Traffic;
