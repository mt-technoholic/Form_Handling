import React from "react";
import * as Component from "@/components";

const PropertyUnits = () => {
  return (
    <>
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
    </>
  );
};

export default PropertyUnits;
