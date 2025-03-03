import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().required("Email is required").email(),
  password: Yup.string()
    .min(6)
    .minUppercase(1)
    .minNumbers(1)
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must be match")
    .required("Password is required"),
});
