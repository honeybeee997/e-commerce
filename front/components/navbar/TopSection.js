import React from "react";

import SaleRow from "./sale-row/SaleRow";
import CurrencyRow from "./currency-row/CurrencyRow";
import Navbar from "./navigation-row/Navbar";

const TopSection = () => {
  return (
    <article className="top--section layout--top">
      <SaleRow />
      <CurrencyRow />
      <Navbar />
    </article>
  );
};

export default TopSection;
