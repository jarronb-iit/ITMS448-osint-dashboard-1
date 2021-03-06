import { TextField, Checkbox, Select } from "@material-ui/core";
import * as yup from "yup";

const { REACT_APP_BOWSER_API_HOST, REACT_APP_BOWSER_API_PORT } = process.env;

const initialValues = {
  host: REACT_APP_BOWSER_API_HOST,
  port: REACT_APP_BOWSER_API_PORT,
  actionString: "/api/generate/reddit/json?subreddit=Sino"
};

const validationSchema = yup.object().shape({
  host: yup
    .string("Host must be a number")
    .required("Host is required"),
  actionString: yup
    .string("Action Page must be a string")
    .max(40, "Action cannont be more than 40 characters")
    .required("Action is required")
});

const inputsModels = {
  hostSection: [
    {
      id: "host",
      name: "host",
      label: "Host",
      type: "input",
      columnSpan: { xs: 12, sm: 12, md: 5 },
      formControlProps: {
        fullWidth: true
      },
      inputProps: {
        // disabled: true
      },
      component: "TextField"
    },
    {
      id: "action-string",
      name: "actionString",
      label: "Action",
      type: "input",
      columnSpan: { xs: 12, sm: 12, md: 3 },
      formControlProps: {
        fullWidth: true
      },
      inputProps: {
        // disabled: true
      },
      component: "TextField"
    }
  ]
};

export { inputsModels, initialValues, validationSchema };
