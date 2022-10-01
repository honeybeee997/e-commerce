import Head from "next/head";
import React from "react";

import { Button } from "@mui/material";

import Layout from "../../../components/admin/Layout";
import Table from "../../../components/admin/settings/UsersTable";
import NewForm from "../../../components/admin/settings/NewForm";

function createData(
  name,
  email,
  products,
  collections,
  blogs,
  role,
  dateCreated
) {
  return { name, email, products, collections, blogs, role, dateCreated };
}

const rows = [
  createData(
    "Muneeb Ahmed",
    "ahmedmuneeb997@gmail.com",
    159,
    6,
    24,
    "Admin",
    "22-5-18"
  ),
  createData(
    "Muneeb Ahmed",
    "ahmedmuneeb997@gmail.com",
    159,
    6,
    24,
    "Manager",
    "22-5-18"
  ),
  createData(
    "Muneeb Ahmed",
    "ahmedmuneeb997@gmail.com",
    159,
    6,
    24,
    "User",
    "22-5-18"
  ),
  createData(
    "Muneeb Ahmed",
    "ahmedmuneeb997@gmail.com",
    159,
    6,
    24,
    "Admin",
    "22-5-18"
  ),
  createData(
    "Muneeb Ahmed",
    "ahmedmuneeb997@gmail.com",
    159,
    6,
    24,
    "User",
    "22-5-18"
  ),
];

const Index = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <Layout>
        <NewForm open={open} handleClose={handleClose} />
        <Table rows={rows} />
        <div className="text-right mt-8">
          <Button
            variant="contained"
            color="success"
            className="btn-override-green"
            onClick={handleOpen}
          >
            Add New User
          </Button>
        </div>
      </Layout>
    </>
  );
};

export default Index;
