import Head from "next/head";
import React from "react";
import Dropdown from "../../../components/admin/common/Dropdown";
import ItemsList from "../../../components/admin/common/ItemsList";
import Layout from "../../../components/admin/Layout";
import { categoriesPage } from "../../../data";

const Index = () => {
  return (
    <>
      <Head>
        <title>Collections</title>
      </Head>
      <Layout>
        <Dropdown />
        <ItemsList items={categoriesPage} collection />
      </Layout>
    </>
  );
};

export default Index;
