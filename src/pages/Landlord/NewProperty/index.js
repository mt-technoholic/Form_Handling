import React, { useState } from "react";
import * as Components from "../../../components";
import { NewPropertySteps } from "@/content/steps";
import * as Forms from "../../../components/Forms";
import { NewPropertyValidationSchemas } from "@/utils/validation";
import { Formik, Form } from "formik";

const NewProperty = () => {
  const [step, setStep] = useState(0);

  const initialValues = {
    property: "",
    price: "",
    address: "",
    unit: "",
    phone: "",
    amenities: "",
    amenities_number: "",
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = (values) => {
    if (step === NewPropertySteps.length - 1) {
      alert(JSON.stringify(values, null, 2));
    } else {
      handleNext();
    }
  };

  return (
    <div className="py-10 flex flex-col gap-10">
      <div className="flex justify-center">
        <Components.Steps steps={NewPropertySteps} activeStep={step} />
      </div>
      <div className="flex justify-center">
        <Formik
          initialValues={initialValues}
          validationSchema={NewPropertyValidationSchemas[step]}
          onSubmit={handleSubmit}
        >
          {({ isValid }) => (
            <Form className="flex flex-col w-[800px]">
              {step === 0 && (
                <Forms.PropertyOverviewForm />
              )}

              {step === 1 && (
                <Forms.PropertyUnitsForm />
              )}

              {step === 2 && (
                <Forms.PropertyAmenitiesForm />
              )}

              <div className="flex w-[390px] gap-4">
                {step > 0 && (
                  <Components.Button type={'button'} handler={handlePrev}>
                    Back
                  </Components.Button>
                )}
                <Components.Button disabled={!isValid}>
                  {step === NewPropertySteps.length - 1 ? "Submit" : "Next"}
                </Components.Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewProperty;
