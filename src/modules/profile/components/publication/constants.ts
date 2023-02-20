import * as Yup from "yup";

export const FormikSchema = Yup.object().shape({
    title: Yup.string()
      .min(6, "Username should be at list 6 char.")
      .required("* publication title is required"),
    publisher: Yup.string()
      .min(6, "Password Should be at Least 6 Characters.")
      .required("* publisher is required"),
    summary: Yup.string()
    .min(6, "Password Should be at Least 6 Characters.")
    .required("* summary is required."),
});