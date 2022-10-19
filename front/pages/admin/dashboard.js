import Head from "next/head";
import { Card, Grid } from "@mui/material";

import Layout from "../../components/admin/Layout";

import Chart from "../../components/admin/dashboard/Chart";
import Stats from "../../components/admin/dashboard/Stats";
import { dashData } from "../../data";
import Overview from "../../components/admin/dashboard/Overview";
import { BsFillBagFill } from "react-icons/bs";
import { AiFillRead, AiFillShop } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Layout>
        <Grid container spacing={2} className="w-full mb-16">
          <Stats
            size={6}
            name="Products"
            number="125445"
            icon={<BsFillBagFill />}
          />
          <Stats
            size={6}
            name="Collections"
            number="125445"
            icon={<AiFillShop />}
          />
          <Stats size={6} name="Blogs" number="125445" icon={<AiFillRead />} />
          <Stats size={6} name="Users" number="125445" icon={<FiSettings />} />
        </Grid>
        <Card className="py-6 pr-6 border  mb-16">
          <Overview name="All Sales" />
        </Card>
        <Card className="py-6 pr-6 border mb-16">
          <Overview name="New Visitors" />
        </Card>
        <Grid container spacing={2} className="mb-16">
          <Chart data={dashData} name="Products" size={6} />
          <Chart data={dashData} name="Collections" size={6} />
          <Chart data={dashData} name="Blogs" size={6} />
        </Grid>
      </Layout>
    </>
  );
};

export default Dashboard;
