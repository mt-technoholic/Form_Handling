import * as Yup from "yup";

const ValidateRegistrationForm = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("First Name is required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Last Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const ValidateLoginForm = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

export { ValidateRegistrationForm, ValidateLoginForm };
