import React from "react";
import { Field, ErrorMessage } from "formik";

const InputField = ({
  name,
  label,
  type="text",
  placeholder,
}) => {
  return (
    <div className="flex flex-col">
      { label && <label htmlFor={name}>{label}</label>}
      <Field 
        className='p-2 border border-gray-300 rounded mt-1'
        name={name} 
        type={type}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component="div" />
    </div>
  );
};

export default InputField;
