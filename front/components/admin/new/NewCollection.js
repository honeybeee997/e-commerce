import * as React from "react";
import Modal from "@mui/material/Modal";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
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

export default function NewCollection(props) {
  const submitHandler = (values) => {
    formik.resetForm();
    props.handleClose();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      text: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(3, "Name must be at least 3 characters"),
      text: Yup.string()
        .required("Required")
        .min(10, "Text must be at least 10 characters"),
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
            New Collection
          </Typography>
          <form
            className="flex flex-col items-center gap-4"
            onSubmit={formik.handleSubmit}
          >
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              className="w-full"
              {...formik.getFieldProps("name")}
              error={formik.touched.name && !!formik.errors.name}
              helperText={
                formik.touched.name &&
                !!formik.errors.name &&
                formik.errors.name
              }
            />
            <TextField
              id="text"
              name="text"
              label="Text"
              variant="outlined"
              className="w-full"
              multiline
              rows={4}
              {...formik.getFieldProps("text")}
              error={formik.touched.text && !!formik.errors.text}
              helperText={
                formik.touched.text &&
                !!formik.errors.text &&
                formik.errors.text
              }
            />
            <div className="text-center">
              <Button
                variant="contained"
                className="btn-override mx-auto mt-6"
                type="submit"
              >
                Create Collection
              </Button>
            </div>
          </form>
        </Paper>
      </Modal>
    </div>
  );
}
