import React from "react";
import { Formik, Form } from "formik";
import { ValidatePropertyOverviewForm } from "../../utils/validation";
import * as Component from "@/components";

const PropertyOverview = ({ handleNext }) => {
  const initialValues = {
    property: "",
    price: "",
    address: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    handleNext();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidatePropertyOverviewForm}
      onSubmit={handleSubmit}
    >
      {({isSubmitting}) => (
        <Form className="flex flex-col w-[800px]">
          <Component.InputField
            name="property"
            label="Property Name"
            placeholder="Property Name"
          />

          <Component.InputField
            name="price"
            label="Price"
            placeholder="Price"
          />

          <Component.InputField
            name="address"
            label="Address"
            placeholder="Address"
          />
          <div>
            <Component.Button disabled={isSubmitting}>Next</Component.Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PropertyOverview;
