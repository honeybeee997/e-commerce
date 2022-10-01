import Head from "next/head";
import React from "react";
import MiniBanner from "../../components/intro-banners/other/MiniBanner";
import BlogsMini from "../../components/blogs/BlogsMini";
import { miniBLogs } from "../../data";

const Index = () => {
  return (
    <>
      <Head>
        <title>Kalles - Blogs</title>
      </Head>

      <MiniBanner image="/images/advert-1.webp">We Wrote these blogs by all our heart</MiniBanner>

      <main className="pt-20">
        <BlogsMini
          heading="Read Them All"
          tagline="It's so much fun to share these with you"
          blogs={miniBLogs}
        />
      </main>
    </>
  );
};

export default Index;
