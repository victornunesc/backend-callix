import * as yup from "yup";

export const getLaunch = yup.object().shape({
  id: yup.string(),
  links: yup.object().shape({
    patch: yup.object().shape({
      small: yup.string().nullable(),
      large: yup.string().nullable(),
    }),
    wikipedia: yup.string().nullable(),
  }),
  rocket: yup.string(),
  success: yup.boolean().nullable(),
  failures: yup.array(),
  crew: yup.array(),
  flight_number: yup.number(),
  name: yup.string(),
  date_unix: yup.number(),
  date_utc: yup.string(),
});

export const getLaunches = yup.array().of(getLaunch);
