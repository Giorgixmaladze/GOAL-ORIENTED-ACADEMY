
const RedMode2 = () => {
    const [lightMode, setLightMode] = useLightMode(false);
  
    return (
      <div
        style={{
          width: 500,
          height: 500,
          backgroundColor: lightMode ? "brown" : "black",
        }}
      >
        <button onClick={setLightMode}>LightMode</button>
      </div>
    );
  };
  
  export default RedMode2;
  