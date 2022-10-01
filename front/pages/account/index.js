import Head from "next/head";
import React from "react";

import MiniBanner from "../../components/intro-banners/other/MiniBanner";
import AccountDashboard from "../../components/account";

const Index = () => {
  return (
    <>
      <Head>
        <title>Kalles - My Account</title>
      </Head>
      <MiniBanner image="/images/mini-banner-1.jpg">My Account</MiniBanner>
      <main>
        <AccountDashboard />
      </main>
    </>
  );
};

export default Index;
