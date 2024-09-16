import React from "react";
import { FieldArray } from 'formik';
import * as Component from "@/components";

const PropertyUnits = ({values}) => {
  return (
    <FieldArray name="units">
      {({ push, remove }) => (
        <div>
        {values.units.map((unit, index) => (
          <div key={index} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', paddingBottom: '10px' }}>
            <Component.InputField
              name={`units.${index}.unit`}
              label="Unit Number"
              placeholder="Unit Number"
            />

            <Component.InputField
              name={`units.${index}.phone`}
              label="Phone Number"
              placeholder="Phone Number"
            />
            {index > 0 && (
              <button type="button" onClick={() => remove(index)}>
                Remove Unit
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={() => push({ unit: '', phone: '' })}>
          Add Unit
        </button>
      </div>
      )}
    </FieldArray>
  );
};

export default PropertyUnits;
