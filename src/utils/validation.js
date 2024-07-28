import * as Yup from "yup";

const ValidateRegistrationForm = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("First Name is required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Last Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const ValidateLoginForm = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const ValidatePropertyOverviewForm = Yup.object({
  property: Yup.string().required("Property Name is required"),
  price: Yup.string().required("Price is required"),
  address: Yup.string().required("Address is required"),
});

const ValidatePropertyUnitsForm = Yup.object({
  unit: Yup.string().required("Unit Number is required"),
  phone: Yup.string().required("Address is required"),
});

const validatePropertyAmenitiesForm = Yup.object({
  amenities: Yup.string().required("Amenities is required"),
  amenities_number: Yup.string().required("Amenities Number is required"),
});

export { 
  ValidateRegistrationForm, 
  ValidateLoginForm,
  ValidatePropertyOverviewForm,
  ValidatePropertyUnitsForm,
  validatePropertyAmenitiesForm,
};
