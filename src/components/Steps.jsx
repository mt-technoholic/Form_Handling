import React from "react";

const Steps = ({ steps, currentStep }) => {
  return (
    <ul className="steps">
      {steps.map((step, index) => (
        <li
          key={index}
          className={`step ${currentStep > index ? "step-primary" : ""}`}
        >
          <div className="w-40">{step}</div>
        </li>
      ))}
    </ul>
  );
};

export default Steps;
