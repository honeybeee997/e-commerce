import Head from "next/head";
import React from "react";
import Dropdown from "../../../components/admin/common/Dropdown";
import ItemsList from "../../../components/admin/common/ItemsList";
import Layout from "../../../components/admin/Layout";
import { trending } from "../../../data";

const Index = () => {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <Layout>
        <Dropdown />
        <ItemsList items={trending} product />
      </Layout>
    </>
  );
};

export default Index;
