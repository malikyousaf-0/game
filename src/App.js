import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import ScrachGame from "./games/ScrachGame";
import SlotGame from "./games/SlotGame";
import Back from "./games/Back";
function App() {
  return (
    <>
      <div className="app ">
        <Back>
          <div className="d-flex justify-content-center align-items-center">
            <div className="nav-link m-2">
              {" "}
              <Link to="/">
                <div className="btn">Scrach </div>
              </Link>
            </div>
            <div className="nav-link m-2">
              {" "}
              <Link to="/slot">
                <div className="btn">Slot </div>
              </Link>
            </div>
          </div>

          <Routes>
            <Route path="/" element={<ScrachGame />} />
            <Route path="/slot" element={<SlotGame />} />
          </Routes>
        </Back>
      </div>
    </>
  );
}

export default App;
