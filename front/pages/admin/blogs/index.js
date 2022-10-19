import { Button } from "@mui/material";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { backend } from "../../../.config";
import Dropdown from "../../../components/admin/common/Dropdown";
import ItemsList from "../../../components/admin/common/ItemsList";
import Layout from "../../../components/admin/Layout";
import NewBlog from "../../../components/admin/new/NewBlog";
import NewForm from "../../../components/admin/settings/NewForm";
import Loader from "../../../components/extras/Loader";
import { useHttp } from "../../../hooks/use-http";

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
    content = <p>No Blogs found. Let's add one</p>;
  } else {
    content = (
      <>
        <Dropdown />
        <ItemsList items={data} blog />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <Layout>
        {isLoading ? <Loader /> : content}
        <NewBlog open={open} handleClose={handleClose} />
        <div className="text-right mt-8">
          <Button
            variant="contained"
            color="success"
            className="btn-override-green"
            onClick={handleOpen}
          >
            Add Blog
          </Button>
        </div>
      </Layout>
    </>
  );
};

export default Index;
