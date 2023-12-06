import React, { useEffect, useState } from "react";
import apple from "../assets/apple.png";
import mango from "../assets/mango.png";
import orange from "../assets/orange.png";
export default function SlotGame() {
  const Array = [apple, mango, orange];
  const [value, addValue] = useState({
    val1: mango,
    val2: mango,
    val3: orange,
  });
  const [result, setResult] = useState("");
  const checkvalue = () => {
    addValue({
      val1: Array[Math.floor(Math.random() * 3)],
      val2: Array[Math.floor(Math.random() * 3)],
      val3: Array[Math.floor(Math.random() * 3)],
    });
  };

  useEffect(() => {
    if (value.val1 === value.val2 && value.val2 === value.val3) {
      setResult("You Win");
    } else setResult("");
  }, [checkvalue]);

  // spin

  return (
    <>
      <div className="slot">
        <div className="container text-center">
          <h1 className="heading">Slot game</h1>
          <div className="row mt-5">
            <div className="col-md-4">
              <img
                src={value.val1}
                style={{ width: "10rem", height: "10rem" }}
                alt=""
              />
            </div>
            <div className="col-md-4">
              <img
                src={value.val2}
                style={{ width: "10rem", height: "10rem" }}
                alt=""
              />
            </div>
            <div className="col-md-4">
              <img
                src={value.val3}
                style={{ width: "10rem", height: "10rem" }}
                alt=""
              />
            </div>
          </div>
          <button className="btn btn-primary mt-5" onClick={checkvalue}>
            PLAY
          </button>
          <h1 className="fw-b mt-5">{result}</h1>
        </div>
      </div>
    </>
  );
}

// gae
