import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [dark, setDark] = useLocalStorage("Dark:", false);

  return (
    <div style={{ backgroundColor: dark ? "#222" : "white" }}>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}

export default App;
