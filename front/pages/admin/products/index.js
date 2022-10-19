import Head from "next/head";
import React, { useEffect, useState } from "react";
import Dropdown from "../../../components/admin/common/Dropdown";
import ItemsList from "../../../components/admin/common/ItemsList";
import Layout from "../../../components/admin/Layout";
import Loader from "../../../components/extras/Loader";
import { useHttp } from "../../../hooks/use-http";
import { backend } from "../../../.config.js";
import NewProduct from "../../../components/admin/new/NewProduct";
import { Button } from "@mui/material";

const Index = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState([]);
  const { sendRequest, isLoading } = useHttp();

  useEffect(() => {
    (async function () {
      const res = await sendRequest(`${backend}/api/products`);
      setData(res.data.products);
    })();
  }, []);

  let content;

  if (data.length === 0) {
    content = <p>No Products found. Let's add one</p>;
  } else {
    content = (
      <>
        <Dropdown />
        <ItemsList items={data} product />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <Layout>
        {isLoading ? <Loader /> : content}
        <NewProduct open={open} handleClose={handleClose} />
        <div className="text-right mt-8">
          <Button
            variant="contained"
            color="success"
            className="btn-override-green"
            onClick={handleOpen}
          >
            Add Product
          </Button>
        </div>
      </Layout>
    </>
  );
};

export default Index;
