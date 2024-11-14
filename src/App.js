import CommandBar from "./components/commandBar.js";
import Keypad from "./components/keypad.js";
import Yes from "./components/topSection.js";

function App() {
  return (
    <div className="w-screen h-screen bg-eos-black flex items-center justify-center p-4">
      <Yes />
      <Keypad />
      <CommandBar />
    </div>
  );
}

export default App;