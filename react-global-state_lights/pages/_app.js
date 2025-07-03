import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    { id: "1", name: "Living Room", isOn: false },
    { id: "2", name: "Kitchen", isOn: false },
    { id: "3", name: "Bedroom", isOn: false },
    { id: "4", name: "Bathroom", isOn: false },
    { id: "5", name: "Garage", isOn: false },
    { id: "6", name: "Porch", isOn: false },
    { id: "7", name: "Garden", isOn: false },
    { id: "8", name: "Office", isOn: false },
  ]);

  function toggleLight(id) {
    setLights((prevLights) =>
      prevLights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  const lightsOnCount = (lights) => {
    return lights.filter((light) => light.isOn).length;
  };
  function handleAllLightsOn() {
    setLights((prevLights) => {
      const updatedLights = prevLights.map((light) => ({
        ...light,
        isOn: true,
      }));
      console.log("All lights turned on:", updatedLights); // ✅ hier ist's gültig
      return updatedLights;
    });
  }
  function handleAllLightsOff() {
    setLights((prevLights) =>
      prevLights.map((light) => ({
        ...light,
        isOn: false,
      }))
    );
  }

  const isDimmed = (lights) => {
    return lights.every((light) => !light.isOn);
  };
  return (
    <Layout isDimmed={isDimmed(lights)}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={toggleLight}
        handleAllLightsOn={handleAllLightsOn}
        handleAllLightsOff={handleAllLightsOff}
        lightsOnCount={lightsOnCount(lights)}
        isDimmed={isDimmed(lights)}
      />
    </Layout>
  );
}
