import Head from "next/head";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";

const Index = () => {
  const loginSubmitHandler = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Entered email is not Valid")
        .required("Required"),
      password: Yup.string()
        .max(15, "Password must be 15 characters or less")
        .required("Required"),
    }),
    onSubmit: loginSubmitHandler,
  });

  return (
    <>
      <Head>
        <title>Admin</title>
      </Head>
      <main className="h-screen w-screen flex flex-col items-center justify-center">
        <Typography variant="h4" component="h2">
          Login
        </Typography>
        <form
          className="flex flex-col items-center gap-4 mt-8 w-4/5 max-w-sm border border-gray-400 rounded-lg p-8"
          onSubmit={formik.handleSubmit}
        >
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            className="w-full"
            {...formik.getFieldProps("email")}
            error={formik.touched.email && !!formik.errors.email}
            helperText={
              formik.touched.email &&
              !!formik.errors.email &&
              formik.errors.email
            }
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            className="w-full"
            type="password"
            {...formik.getFieldProps("password")}
            error={formik.touched.password && !!formik.errors.password}
            helperText={
              formik.touched.password &&
              !!formik.errors.password &&
              formik.errors.password
            }
          />
          <Button
            variant="contained"
            className="btn-override mt-6"
            type="submit"
          >
            Enter
          </Button>
        </form>
      </main>
    </>
  );
};

export default Index;
