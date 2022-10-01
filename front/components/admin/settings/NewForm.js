import * as React from "react";
import Modal from "@mui/material/Modal";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  width: 600,
  boxShadow: 24,
  p: 4,
};

export default function NewForm(props) {
  const submitHandler = (values) => {
    console.log(values);
    formik.resetForm();
    props.handleClose();
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username can't be empty")
        .max(15, "Username can't be greater then 15 characters"),
      email: Yup.string()
        .required("Email can't be empty")
        .email("Entered email is Invalid"),
      password: Yup.string()
        .required("Password Can't be empty")
        .min(6, "Password must be at least 6 characters"),
    }),
    onSubmit: submitHandler,
  });

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper variant="outlined" sx={style}>
          <Typography variant="h4" component="h2" className="text-center mb-10">
            New User
          </Typography>
          <form
            className="flex flex-col items-center gap-4"
            onSubmit={formik.handleSubmit}
          >
            <TextField
              id="username"
              name="username"
              label="Username"
              variant="outlined"
              className="w-full"
              {...formik.getFieldProps("username")}
              error={formik.touched.username && !!formik.errors.username}
              helperText={
                formik.touched.username &&
                !!formik.errors.username &&
                formik.errors.username
              }
            />
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
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              className="w-full"
              {...formik.getFieldProps("password")}
              error={formik.touched.password && !!formik.errors.password}
              helperText={
                formik.touched.password &&
                !!formik.errors.password &&
                formik.errors.password
              }
            />
            <div className="text-center">
              <Button
                variant="contained"
                className="btn-override mx-auto mt-6"
                type="submit"
              >
                Create New User
              </Button>
            </div>
          </form>
        </Paper>
      </Modal>
    </div>
  );
}
