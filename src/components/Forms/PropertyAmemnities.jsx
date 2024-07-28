import React from 'react';
import { Formik, Form } from "formik";
import { validatePropertyAmenitiesForm } from "../../utils/validation";
import * as Component from "@/components";

const PropertyAmemnities = ({ handleFormSubmit, handleBack }) => {
    const initialValues = {
        amenities: "",
        amenities_number : "",
      };
    
      const handleSubmit = (values, { setSubmitting }) => {
        setSubmitting(false);
        handleFormSubmit();
      };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validatePropertyAmenitiesForm}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col w-[800px]">
          <Component.InputField
            name="amenities"
            label="Amenities"
            placeholder="Amenities"
          />

          <Component.InputField
            name="amenities_number"
            label="Amenities Number"
            type="number"
            placeholder="Amenities Number"
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
  )
}

export default PropertyAmemnities
