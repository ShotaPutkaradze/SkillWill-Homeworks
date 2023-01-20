import "./App.css";
import useDetectDevice from "./hooks/useDetectDevice";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [dark, setDark] = useLocalStorage("Dark:", false);
  const deviceType = useDetectDevice();

  const style = () => {
    if (dark && deviceType === "desktop") {
      return "#222";
    } else {
      return " white";
    }
  };

  console.log(`${deviceType} version`);

  return (
    <div style={{ backgroundColor: style() }}>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}

export default App;
