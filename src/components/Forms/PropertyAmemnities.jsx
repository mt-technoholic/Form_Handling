import React from "react";
import * as Component from "@/components";

const PropertyAmemnities = () => {
  return (
    <>
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
    </>
  );
};

export default PropertyAmemnities;
