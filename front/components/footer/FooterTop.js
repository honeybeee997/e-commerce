import React from "react";

import { IoCarOutline } from "react-icons/io5";
import { BsArrowClockwise } from "react-icons/bs";
import { CgKeyhole } from "react-icons/cg";

import WaterTube from "./components/WaterTube";
import FooterServices from "./components/FooterService";

const FooterTop = () => {
  return (
    <section className="py-10">
      <div className="container flex gap-12">
        <FooterServices
          icon={<IoCarOutline />}
          heading="FREE SHIPPING"
          text="Free shipping on all US order or order above $100"
        />
        <FooterServices
          icon={<WaterTube />}
          heading="SUPPORT 24/7"
          text="Contact us 24 hours a day, 7 days a week"
        />
        <FooterServices
          icon={<BsArrowClockwise />}
          heading="30 DAYS RETURN"
          text="Simply return it within 30 days for an exchange."
        />
        <FooterServices
          icon={<CgKeyhole />}
          heading="100% PAYMENT SECURE"
          text="We ensure secure payment with PEV"
        />
      </div>
    </section>
  );
};

export default FooterTop;
