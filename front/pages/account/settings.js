import Head from "next/head";
import React from "react";
import AccountSettings from "../../components/account/AccountSettings";
import MiniBanner from "../../components/intro-banners/other/MiniBanner";

const Settings = () => {
  return (
    <>
      <Head>
        <title>Kalles - My Account</title>
      </Head>
      <MiniBanner image="/images/mini-banner-1.jpg">My Account</MiniBanner>
      <main>
        <AccountSettings />
      </main>
    </>
  );
};

export default Settings;
