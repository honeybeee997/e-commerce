import React from "react";
import FooterBottom from "./FooterBottom";
import FooterMid from "./FooterMid";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <section className="footer--all">
      <FooterTop />
      <FooterMid />
      <FooterBottom />
    </section>
  );
};

export default Footer;
