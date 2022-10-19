import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Modal,
  Typography,
} from "@mui/material";

import styles from "../Admin.module.css";
import { ModalDialog } from "@mui/joy";

const ListItem = (props) => {
  console.log(props);
  const [open, setOpen] = useState(false);
  if (props.product) {
    return (
      <>
        <Modal
          aria-labelledby="alert-dialog-modal-title"
          aria-describedby="alert-dialog-modal-description"
          open={open}
          onClose={() => setOpen(false)}
        >
          <ModalDialog
            variant="outlined"
            role="alertdialog"
            className="bg-white"
          >
            <Typography
              id="alert-dialog-modal-title"
              component="h2"
              level="inherit"
              fontSize="1.25em"
              mb="0.25em"
            >
              Confirmation
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography id="alert-dialog-modal-description" mb={3}>
              Are you sure you want to delete this item?
            </Typography>
            <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
              <Button
                variant="plain"
                color="neutral"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="solid"
                color="danger"
                className="btn-override-red"
                onClick={() => setOpen(false)}
              >
                Delete
              </Button>
            </Box>
          </ModalDialog>
        </Modal>
        <Grid item xs={props.size}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={props.images[0]}
              alt={props.name}
              className={styles.itemImage}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.name}
              </Typography>
              <small className={styles.productStat}>
                <strong>Created on :</strong> 25-8-19
              </small>
              <br />
              <small className={styles.productStat}>
                <strong>Prices :</strong> $ {props.price}
              </small>
              <br />
              <small className={styles.productStat}>
                <strong>Sales :</strong> 1200
              </small>
            </CardContent>
            <CardActions className="pb-4">
              <Button size="small">Edit</Button>
              <Button
                size="small"
                variant="contained"
                color="error"
                className="btn-override-red"
                onClick={() => setOpen(true)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </>
    );
  } else if (props.collection) {
    return (
      <>
        <Modal
          aria-labelledby="alert-dialog-modal-title"
          aria-describedby="alert-dialog-modal-description"
          open={open}
          onClose={() => setOpen(false)}
        >
          <ModalDialog
            variant="outlined"
            role="alertdialog"
            className="bg-white"
          >
            <Typography
              id="alert-dialog-modal-title"
              component="h2"
              level="inherit"
              fontSize="1.25em"
              mb="0.25em"
            >
              Confirmation
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography id="alert-dialog-modal-description" mb={3}>
              Are you sure you want to delete this item?
            </Typography>
            <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
              <Button
                variant="plain"
                color="neutral"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="solid"
                color="danger"
                className="btn-override-red"
                onClick={() => setOpen(false)}
              >
                Delete
              </Button>
            </Box>
          </ModalDialog>
        </Modal>
        <Grid item xs={props.size}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={props.image}
              alt={props.category}
              className={styles.itemImage}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.category}
              </Typography>
              <small className={styles.productStat}>
                <strong>Created on :</strong> 25-8-19
              </small>
              <br />
              <small className={styles.productStat}>
                <strong>Products in collection :</strong> 1200
              </small>
            </CardContent>
            <CardActions className="pb-4">
              <Button size="small">Edit</Button>
              <Button
                size="small"
                variant="contained"
                color="error"
                className="btn-override-red"
                onClick={() => setOpen(true)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </>
    );
  } else if (props.blog) {
    return (
      <>
        <Modal
          aria-labelledby="alert-dialog-modal-title"
          aria-describedby="alert-dialog-modal-description"
          open={open}
          onClose={() => setOpen(false)}
        >
          <ModalDialog
            variant="outlined"
            role="alertdialog"
            className="bg-white"
          >
            <Typography
              id="alert-dialog-modal-title"
              component="h2"
              level="inherit"
              fontSize="1.25em"
              mb="0.25em"
            >
              Confirmation
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography id="alert-dialog-modal-description" mb={3}>
              Are you sure you want to delete this item?
            </Typography>
            <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
              <Button
                variant="plain"
                color="neutral"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="solid"
                color="danger"
                className="btn-override-red"
                onClick={() => setOpen(false)}
              >
                Delete
              </Button>
            </Box>
          </ModalDialog>
        </Modal>
        <Grid item xs={props.size}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={props.image}
              alt={props.title}
              className={styles.itemImage}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.title}
              </Typography>
              <p className={styles.excerpt}>{props.excerpt}</p>
              <small className={styles.productStat}>
                <strong>Created on :</strong> 25-8-19
              </small>
              <br />
              <small className={styles.productStat}>
                <strong>Author :</strong> {props.author}
              </small>
            </CardContent>
            <CardActions className="pb-4">
              <Button size="small">Edit</Button>
              <Button
                size="small"
                variant="contained"
                color="error"
                className="btn-override-red"
                onClick={() => setOpen(true)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </>
    );
  }
};

export default ListItem;
