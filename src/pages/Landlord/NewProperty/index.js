import React, { useState } from "react";
import * as Components from "@/components";
import { NewPropertySteps } from "@/content/steps";
import * as Forms from "../../../components/Forms";

const NewProperty = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFormSubmit = () => {
    alert("Form submitted");
  };

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <Forms.PropertyOverviewForm
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 2:
        return (
          <Forms.PropertyUnitsForm
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 3:
        return (
          <Forms.PropertyAmenitiesForm
            handleFormSubmit={handleFormSubmit}
            handleBack={handleBack}
          />
        );
      default:
        return "";
    }
  };

  return (
    <div className="py-10 flex flex-col gap-10">
      <div className="flex justify-center">
        <Components.Steps steps={NewPropertySteps} currentStep={currentStep} />
      </div>
      <div className="flex justify-center">{renderForm()}</div>
    </div>
  );
};

export default NewProperty;
