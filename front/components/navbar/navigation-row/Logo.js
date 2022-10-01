import Image from "next/image";
import Link from "next/link";

import styles from "../Navbar.module.css";

const Logo = () => {
  return (
    <div className="site-brand logo-wrapper">
      <div className={styles.header_logo_container}>
        <Link href="/">
          <a>
            <Image
              src="/images/header-logo.webp"
              alt="Header Brand"
              height={29}
              width={95}
              layout="responsive"
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
