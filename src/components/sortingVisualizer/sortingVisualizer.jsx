import React, { useState, useEffect, useReducer } from "react";
import "./sortingVisualizer.css";
import visualize from "../helpers";
import Slider from "@material-ui/core/Slider";

const SortingVisualizer = () => {
  //const [brightness, setBrightness] = useState(0);
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(5);
  const [size, setSize] = useState(50);
  const [buttonDisabled, setDisabled] = useState(false);
  const [generateDisabled, toggleGenerate] = useReducer(
    (disabled) => !disabled,
    false
  );

  const generateArrayVals = (max, min, length) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
      arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    const container = document.getElementById("array-container");
    Array.from(container.children).forEach(
      (e) => (e.style.backgroundColor = "OrangeRed")
    );
    return setArray(arr);
  };
  useEffect(() => generateArrayVals(1000, 5, size), [size]);

  const algorithm = (type) => {
    setDisabled(true);
    toggleGenerate();
    visualize(type, array, speed, toggleGenerate);
  };

  const handleSize = (e, val) => {
    if (val === size) return;
    setSize(val);
    generateArrayVals(1000, 5, val);
  };

  const handleSpeed = (e, val) => {
    if (val === speed) return;
    const newSpeed = Math.abs(10 - (val - 0.5));
    setSpeed(newSpeed);
    //setBrightness(speed * 10 + -50);
  };

  const handleGenerate = () => {
    generateArrayVals(1000, 5, size);
    setDisabled(false);
  };

  return (
    <>
      <div>
        <h1>Filter</h1>
        <button
          variant="contained"
          color="primary"
          onClick={handleGenerate}
          disabled={generateDisabled}
        >
          Generate New Array
        </button>
        <button
          onClick={() => algorithm("insertion")}
          disabled={buttonDisabled}
        >
          Insertion Sort (Slowest)
        </button>
        <button onClick={() => algorithm("bubble")} disabled={buttonDisabled}>
          Bubble Sort (Slow)
        </button>
        <button
          onClick={() => algorithm("selection")}
          disabled={buttonDisabled}
        >
          Selection Sort (Fast)
        </button>
      </div>
      <div className="sliders">
        Size:{" "}
        <Slider
          min={10}
          max={150}
          step={10}
          defaultValue={50}
          onChange={handleSize}
          disabled={buttonDisabled}
          marks={true}
          valueLabelDisplay="auto"
        />
        Speed:
        <Slider
          className="slider"
          style={{ display: "block" }}
          color="secondary"
          step={0.5}
          min={1}
          max={10}
          marks={true}
          defaultValue={5}
          onChange={handleSpeed}
          disabled={buttonDisabled}
          valueLabelDisplay="auto"
        />
      </div>
      <hr />
      <div id="array-container">
        {array.map((value, index) => (
          <div
            className="array-bar"
            key={index}
            style={{
              height: `${value / 13}vh`,
              width: `${(1 / array.length) * 1000}px`,
              //filter: `hue-rotate(${brightness}deg)`,
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default SortingVisualizer;
