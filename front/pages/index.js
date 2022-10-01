import Head from "next/head";

import { advert, miniBLogs, trending } from "../data";
import CatGrid from "../components/categories/CatGrid";
import AdvertisementBanner from "../components/extras/advertisement/AdvertisementBanner";
import Banner from "../components/intro-banners/home/Banner";
import ProductGrid from "../components/product/ProductGrid";
import BlogsMini from "../components/blogs/BlogsMini";
import LastSlider from "../components/extras/sliders/LastSlider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kalles - Home Shopping</title>
      </Head>
      <main role="main">
        <Banner />
        <CatGrid />
        <ProductGrid
          tagline="Top views in this week"
          heading="TRENDING"
          loadMore="/load-more"
          products={trending}
        />
        <AdvertisementBanner adverts={advert} />
        <ProductGrid
          tagline="Top sale in this week"
          heading="BEST SELLER"
          products={trending}
        />
        <BlogsMini
          tagline="Top sale in this week"
          heading="BEST SELLER"
          blogs={miniBLogs}
        />
        <LastSlider />
      </main>
    </>
  );
}
