import "./Light.css";
function Light({ color, isOn }) {
  return (
    <div className="light-wrapper">
      <div className={`light ${color}-light ${isOn && "on"}`}></div>
    </div>
  );
}

export default Light;
