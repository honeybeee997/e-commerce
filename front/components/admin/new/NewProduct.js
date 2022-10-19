import * as React from "react";
import Modal from "@mui/material/Modal";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHttp } from "../../../hooks/use-http";
import { backend } from "../../../.config";
import Loader from "../../../components/extras/Loader";

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

export default function NewProduct(props) {
  const { sendRequest, isLoading } = useHttp();
  const [collection, setCollection] = React.useState("");
  const [collections, setCollections] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const res = await sendRequest(`${backend}/api/collections`);
      if (res.data) {
        setCollections(res.data.results);
      }
    })();
  }, []);

  const handleChange = (event) => {
    setCollection(event.target.value);
  };

  const submitHandler = (values) => {
    formik.resetForm();
    props.handleClose();
    const sizes = values.sizes.split(",");
    const data = { ...values, collection: collection || "Default", sizes };
    console.log(data);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      description: "",
      sizes: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(3, "Name must be at least 3 characters"),
      price: Yup.number()
        .typeError("Price must be a number")
        .positive()
        .required("Required"),
      description: Yup.string()
        .required("Required")
        .min(10, "Product Description must be at least 3 characters"),
      sizes: Yup.string().required("Required"),
    }),
    onSubmit: submitHandler,
  });

  if (isLoading) {
    return <Loader />;
  }

  const collectionsMap = collections.map((item) => {
    return (
      <MenuItem key={item._id} value={item.name}>
        {item.name}
      </MenuItem>
    );
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
            New Product
          </Typography>
          <form
            className="flex flex-col items-center gap-4"
            onSubmit={formik.handleSubmit}
          >
            <article className="flex gap-4 w-full">
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
                id="price"
                name="price"
                label="Price"
                variant="outlined"
                className="w-full"
                {...formik.getFieldProps("price")}
                error={formik.touched.price && !!formik.errors.price}
                helperText={
                  formik.touched.price &&
                  !!formik.errors.price &&
                  formik.errors.price
                }
              />
            </article>

            <article className="flex gap-4 w-full">
              {collections.length > 0 ? (
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Collection
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={collection}
                    label="Collection"
                    onChange={handleChange}
                  >
                    {collectionsMap}
                  </Select>
                </FormControl>
              ) : null}
              <TextField
                id="sizes"
                name="sizes"
                label="Sizes"
                variant="outlined"
                className="w-full"
                {...formik.getFieldProps("sizes")}
                error={formik.touched.sizes && !!formik.errors.sizes}
                helperText={
                  formik.touched.sizes &&
                  !!formik.errors.sizes &&
                  formik.errors.sizes
                }
              />
            </article>

            <TextField
              id="description"
              name="description"
              label="Description"
              variant="outlined"
              className="w-full"
              multiline
              rows={4}
              {...formik.getFieldProps("description")}
              error={formik.touched.description && !!formik.errors.description}
              helperText={
                formik.touched.description &&
                !!formik.errors.description &&
                formik.errors.description
              }
            />

            <div className="text-center">
              <Button
                variant="contained"
                className="btn-override mx-auto mt-6"
                type="submit"
              >
                Create Product
              </Button>
            </div>
          </form>
        </Paper>
      </Modal>
    </div>
  );
}
