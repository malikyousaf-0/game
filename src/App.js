import "./App.css";
import { Route, Routes } from "react-router-dom";
import ScrachGame from "./games/ScrachGame";
import SlotGame from "./games/SlotGame";
import Back from "./games/Back";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ScrachGame />} />
        <Route path="/slot" element={<SlotGame />} />
      </Routes>
    </>
  );
}

export default App;
