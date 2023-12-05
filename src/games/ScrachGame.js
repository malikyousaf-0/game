import React, { useEffect, useState } from "react";
import ScratchCard from "react-scratchcard";
import couponCover from "./abc.png";
import Back from "./Back";

export default function ScrachGame() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(Math.floor(Math.random() * 4) + 1);
  }, []);

  const settings = {
    width: 200,
    height: 200,
    borderRadius: 20,
    image: couponCover,
    finishPercent: 50,
    // onComplete: handleScratchComplete,
  };

  const reset = () => {
    window.location.reload();
  };

  return (
    <>
      <Back>
        <div className="scrach mt-5" style={{ position: "relative" }}>
          <h1 className="text-center">SCRACH GAME</h1>
          <div className="container mt-5">
            <div className="row">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="col-sm-6 col-md-4 col-lg-3">
                  <ScratchCard {...settings}>
                    <div
                      className={`box h-100 text-center d-flex justify-content-center align-items-center ${
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
              ))}
            </div>
          </div>
          <button onClick={reset} className="btn btn-primary">
            {" "}
            Try Again
          </button>
        </div>
      </Back>
    </>
  );
}
