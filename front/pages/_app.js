import Head from "next/head";
import { Provider } from "react-redux";
import { useRouter } from "next/router";

import GoToTop from "../components/extras/GoToTop";
import TopSection from "../components/navbar/TopSection";
import Footer from "../components/footer/Footer";
import Backdrop from "../components/extras/Backdrop";

import store from "../store/store";

import "../styles/BanneSlider.css";
import "../styles/globals.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function MyApp({ Component, pageProps }) {
  const { route } = useRouter();
  const routeSplit = route.split("/");
  const isPrivate =
    routeSplit.includes("checkout") || routeSplit.includes("admin");
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Provider store={store}>
        {!isPrivate && (
          <>
            <div id="__drawer" />
            <div id="__search" />
            <Backdrop />
            <TopSection />
          </>
        )}
        <Component {...pageProps} />
        {!isPrivate && (
          <>
            <GoToTop />
            <Footer />
          </>
        )}
      </Provider>
    </>
  );
}

export default MyApp;
