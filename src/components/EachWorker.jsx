import React, { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import workers from "../data";

const ranNum = [0, 1, 2, 3, 4];
function EachWorker() {
  const [right, setRight] = useState(0);

  const ranFunc = () => {
    return Math.floor(Math.random() * ranNum.length);
  };

  const leftArrow = () => {
    setRight(right - 1);
    console.log(right);
    if (right === 0) {
      setRight(4);
    }
  };

  const rightArrow = () => {
    setRight(right + 1);
    if (right === workers.length - 1) {
      setRight(0);
    }
    console.log(right);
  };

  return (
    <>
      <h1>Our Reviews</h1>
      <section className="workers-con">
        <summary>
          <img src={workers[right].img} alt="" />
          <h2>{workers[right].name}</h2>
          <h4>{workers[right].occupation}</h4>
          <p>{workers[right].desc}</p>
        </summary>

        {/* Icons container */}
        <div className="click-con">
          <FaArrowAltCircleLeft className="icon" onClick={leftArrow} />
          <FaArrowAltCircleRight className="icon" onClick={rightArrow} />
        </div>

        {/* Random picker button */}
        <button className="btn" onClick={() => setRight(ranFunc())}>
          Random Worker
        </button>
      </section>
    </>
  );
}

export default EachWorker;
