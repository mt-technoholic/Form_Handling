import React, { useState } from "react";
import * as Components from "@/components";
import { NewPropertySteps } from "@/content/steps";
import * as Forms from "../../../components/Forms";

const NewProperty = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextBtn = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBackBtn = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return <Forms.PropertyOverviewForm />;
      case 2:
        return <Forms.PropertyUnitsForm />;
      case 3:
        return <Forms.PropertyAmenitiesForm />;
      case 4:
        return <Forms.PropertyPhotosForm />;
      case 5:
        return <Forms.PropertyPricingForm />;
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
      <div className="flex px-52 gap-10">
        <div className="w-1/2">
          <Components.Button handler={handleBackBtn}>Back</Components.Button>
        </div>
        <div className="w-1/2">
          <Components.Button handler={handleNextBtn}>Next</Components.Button>
        </div>
      </div>
    </div>
  );
};

export default NewProperty;
