import Head from "next/head";
import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";

import Layout from "../../../components/admin/Layout";
import Table from "../../../components/admin/settings/UsersTable";
import NewForm from "../../../components/admin/settings/NewForm";
import { useHttp } from "../../../hooks/use-http";
import { backend } from "../../../.config";
import Loader from "../../../components/extras/Loader";

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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState([]);
  const { sendRequest, isLoading } = useHttp();

  useEffect(() => {
    (async function () {
      const res = await sendRequest(`${backend}/api/blogs`);
      setData(res.data.results);
    })();
  }, []);

  let content;

  if (data.length === 0) {
    content = <p>No Users found. Let's add one</p>;
  } else {
    content = (
      <>
        <Table rows={data} />
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <Layout>
        {isLoading ? <Loader /> : content}
        <NewForm open={open} handleClose={handleClose} />
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
