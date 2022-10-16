import Head from "next/head";
import React, { useEffect, useState } from "react";
import Dropdown from "../../../components/admin/common/Dropdown";
import ItemsList from "../../../components/admin/common/ItemsList";
import Layout from "../../../components/admin/Layout";
import Loader from "../../../components/extras/Loader";
import { useHttp } from "../../../hooks/use-http";
import { backend } from "../../../.config.js";

const Index = () => {
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
      <Layout>{isLoading ? <Loader /> : content}</Layout>
    </>
  );
};

export default Index;
