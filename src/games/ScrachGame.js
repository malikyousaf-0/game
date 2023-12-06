import React, { useEffect, useState } from "react";
import ScratchCard from "react-scratchcard";
import couponCover from "./abc.png";
import Back from "./Back";

export default function ScrachGame() {
  const [value, setValue] = useState(0);
  const [win, setwin] = useState("");

  useEffect(() => {
    setValue(Math.floor(Math.random() * 4) + 1);
  }, []);

  const settings = {
    width: 200,
    height: 200,
    image: couponCover,
    finishPercent: 50,
    // onComplete: handleScratchComplete,
    // onComplete: () => divContent === "you win" && alert("ldfkjsakl"),
    // onComplete: () => alert(win),
  };

  const reset = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="scrach mt-5" style={{ position: "relative" }}>
        <h1 className="text-center heading">SCRACH GAME</h1>
        <h2 className="text-center">Scrach All</h2>
        <div className="container mt-5">
          <div className="row">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="col-sm-6 col-md-4 col-lg-3 ">
                <div className="boxOuter m-2">
                  <ScratchCard {...settings}>
                    <div
                      className={`box h-100  d-flex justify-content-center align-items-center ${
                        i + 1 === value
                          ? "bg-dark shadow"
                          : "bg-light text-dark shadow"
                      }`}
                    >
                      <div className="text">
                        {i + 1 === value ? `you win` : "try Again"}
                      </div>
                    </div>
                  </ScratchCard>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="button text-center mt-5">
          <button onClick={reset} className="btn btn-primary ">
            Try Again
          </button>
        </div>
      </div>
    </>
  );
}
