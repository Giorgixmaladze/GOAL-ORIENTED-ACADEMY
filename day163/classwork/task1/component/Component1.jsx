
import useLightMode from "../hooks/useLightMode";

const LightMode = () => {
  const [lightMode, setLightMode] = useLightMode(false);

  return (
    <div
      style={{
        width: 500,
        height: 500,
        backgroundColor: lightMode ? "wheat" : "black",
      }}
    >
      <button onClick={setLightMode}>LightMode</button>
    </div>
  );
};

export default LightMode;
