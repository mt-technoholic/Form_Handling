import React from "react";
import * as Component from "@/components";

const PropertyOverview = () => {
  return (
    <>
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
    </>
  );
};

export default PropertyOverview;
