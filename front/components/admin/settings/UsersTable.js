import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { BsFillTrashFill } from "react-icons/bs";
import { ModalDialog } from "@mui/joy";

const UsersTable = ({ rows }) => {
  const [open, setOpen] = useState(false);

  const openTheLegendryModal = () => {
    setOpen(true);
  };

  return (
    <>
      <Modal
        aria-labelledby="alert-dialog-modal-title"
        aria-describedby="alert-dialog-modal-description"
        open={open}
        onClose={() => setOpen(false)}
      >
        <ModalDialog variant="outlined" role="alertdialog" className="bg-white">
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
            Are you sure you want to delete this user ?
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
      <article>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Products</TableCell>
                <TableCell align="right">Collections</TableCell>
                <TableCell align="right">Blogs</TableCell>
                <TableCell align="right">Role</TableCell>
                <TableCell align="right">Date Created</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.products}</TableCell>
                  <TableCell align="right">{row.collections}</TableCell>
                  <TableCell align="right">{row.blogs}</TableCell>
                  <TableCell align="right">{row.role}</TableCell>
                  <TableCell align="right">{row.dateCreated}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<BsFillTrashFill className="text-xs" />}
                      className="text-xs"
                      onClick={openTheLegendryModal}
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </article>
    </>
  );
};

export default UsersTable;
