import React from "react";
import { Field, ErrorMessage } from "formik";

const InputField = ({ name, label, type = "text", placeholder }) => {
  return (
    <label className="form-control w-full">
      {label && (
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
      )}
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full"
      />
      <div className="label">
        <ErrorMessage className="label-text-alt text-red-500" name={name} component="div" />
      </div>
    </label>
  );
};

export default InputField;
