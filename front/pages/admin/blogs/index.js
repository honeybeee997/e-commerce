import Head from "next/head";
import React from "react";
import Dropdown from "../../../components/admin/common/Dropdown";
import ItemsList from "../../../components/admin/common/ItemsList";
import Layout from "../../../components/admin/Layout";
import { miniBLogs } from "../../../data";

const Index = () => {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <Layout>
        <Dropdown />
        <ItemsList items={miniBLogs} blog />
      </Layout>
    </>
  );
};

export default Index;
