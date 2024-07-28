import React, { useState } from "react";
import * as Components from "@/components";
import { NewPropertySteps } from "@/content/steps";

const NewProperty = () => {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <div>
      <Components.Steps steps={NewPropertySteps} currentStep={currentStep} />
    </div>
  );
};

export default NewProperty;
