import { useState } from "react";

const useLightMode = (initialValue = false) => {
  const [lightMode, setLightMode] = useState(false);

  const toggle = () => {
    setLightMode(!lightMode);
  };

  return [lightMode, toggle];
};

export default useLightMode;
