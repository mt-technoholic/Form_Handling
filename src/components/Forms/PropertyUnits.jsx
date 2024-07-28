import React from "react";
import { Formik, Form } from "formik";
import { ValidatePropertyUnitsForm } from "../../utils/validation";
import * as Component from "@/components";

const PropertyUnits = ({ handleNext, handleBack }) => {
  const initialValues = {
    unit: "",
    phone: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    handleNext();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidatePropertyUnitsForm}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col w-[800px]">
          <Component.InputField
            name="unit"
            label="Unit Number"
            placeholder="Unit Number"
          />

          <Component.InputField
            name="phone"
            label="Phone Number"
            placeholder="Phone Number"
          />
          <div className="flex gap-5">
            <div className="w-1/2">
              <Component.Button handler={handleBack}>Back</Component.Button>
            </div>
            <div className="w-1/2">
              <Component.Button disabled={isSubmitting}>Next</Component.Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PropertyUnits;
