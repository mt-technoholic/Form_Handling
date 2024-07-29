import React from "react";

const Steps = ({ steps, activeStep }) => {
  return (
    <ul className="steps">
      {steps.map((step, index) => (
        <li
          key={index}
          className={`step ${activeStep >= index ? "step-primary" : ""}`}
        >
          <div className="w-40">{step}</div>
        </li>
      ))}
    </ul>
  );
};

export default Steps;
