import Image from "next/image";
import Link from "next/link";
import React from "react";

import { BsEnvelope, BsTelephone, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedin, FaPinterestP } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { GrInstagram } from "react-icons/gr";
import NewsLetter from "./components/NewsLetter";

import styles from "./Footer.module.css";

const FooterMid = () => {
  return (
    <section className={`py-20 ${styles.footerMid}`}>
      <div className="container">
        <article>
          <div className="mb-6">
            <Image
              src="/images/header-logo.webp"
              alt="footer brand"
              height={27}
              width={95}
            />
          </div>
          <div className={styles.footerMid_info}>
            <span>
              <GoLocation />
            </span>
            <p>184 Main Rd E, St Albans VIC 3021, Australia</p>
          </div>
          <div className={styles.footerMid_info}>
            <span>
              <BsEnvelope />
            </span>
            <p>contact@company.com </p>
          </div>
          <div className={styles.footerMid_info}>
            <span>
              <BsTelephone />
            </span>
            <p>+001 2233 456</p>
          </div>
          <ul className="flex items-center gap-4 mt-6">
            <li className={styles.footer_social_list}>
              <Link href="/">
                <a className={styles.footerSocial_link}>
                  <FaFacebookF />
                </a>
              </Link>
            </li>
            <li className={styles.footer_social_list}>
              <Link href="/">
                <a className={styles.footerSocial_link}>
                  <BsTwitter />
                </a>
              </Link>
            </li>
            <li className={styles.footer_social_list}>
              <Link href="/">
                <a className={styles.footerSocial_link}>
                  <GrInstagram />
                </a>
              </Link>
            </li>
            <li className={styles.footer_social_list}>
              <Link href="/">
                <a className={styles.footerSocial_link}>
                  <FaLinkedin />
                </a>
              </Link>
            </li>
            <li className={styles.footer_social_list}>
              <Link href="/">
                <a className={styles.footerSocial_link}>
                  <FaPinterestP />
                </a>
              </Link>
            </li>
          </ul>
        </article>
        <article className={styles.footer_nav}>
          <h3>Categories</h3>
          <ul>
            <li>
              <Link href="/">
                <a>Men</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Women</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Accessories</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Shoes</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Watches</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Dress</a>
              </Link>
            </li>
          </ul>
        </article>
        <article className={styles.footer_nav}>
          <h3>Infomation</h3>
          <ul>
            <li>
              <Link href="/">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Contact Us</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Terms and Conditions</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Returns and Exchanges</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Shipping and Delivery</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Privacy Policy</a>
              </Link>
            </li>
          </ul>
        </article>
        <article className={styles.footer_nav}>
          <h3>Useful links</h3>
          <ul>
            <li>
              <Link href="/">
                <a>Latest News</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>My Account</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Size Guide</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>FAQs</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>FAQs 2</a>
              </Link>
            </li>
          </ul>
        </article>
        <article>
          <h3>Newsletter Signup</h3>
          <p>Subscribe to our newsletter and get 10% off your first purchase</p>
          <NewsLetter />
        </article>
      </div>
    </section>
  );
};

export default FooterMid;
