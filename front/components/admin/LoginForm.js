import React from "react";
import { Alert, CircularProgress, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";

const LoginForm = ({ formik, isLoading, alert }) => {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center">
      <Typography variant="h4" component="h2">
        Login
      </Typography>
      <form
        className="flex flex-col items-center gap-4 mt-8 w-4/5 max-w-sm border border-gray-400 rounded-lg p-8"
        onSubmit={formik.handleSubmit}
      >
        {alert && (
          <Alert style={{ marginBottom: "1rem" }} severity="error">
            {alert}
          </Alert>
        )}
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          className="w-full"
          {...formik.getFieldProps("email")}
          error={formik.touched.email && !!formik.errors.email}
          helperText={
            formik.touched.email && !!formik.errors.email && formik.errors.email
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
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Button
            variant="contained"
            className="btn-override mt-6"
            type="submit"
          >
            Enter
          </Button>
        )}
      </form>
    </main>
  );
};

export default LoginForm;
