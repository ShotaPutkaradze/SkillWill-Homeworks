import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [dark, setDark] = useLocalStorage("isDark:", false);

  console.log(dark);
  return (
    <div className={dark ? "dark" : "white"}>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}

export default App;
