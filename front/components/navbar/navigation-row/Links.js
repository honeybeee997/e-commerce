import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../Navbar.module.css";

const Links = () => {
  const router = useRouter();
  const route = router.route;
  const routeCheck = route.split("/");
  const routeCollection = routeCheck.includes("c");
  const routeProduct = routeCheck.includes("p");

  return (
    <nav className="flex items-center justify-center">
      <Link href="/">
        <a className={`${styles.nav_link} ${route === "/" && styles.active}`}>
          Home
        </a>
      </Link>
      <Link href="/collections">
        <a
          className={`${styles.nav_link} ${
            (route === "/collections" || routeCollection) && styles.active
          }`}
        >
          Collections
        </a>
      </Link>
      <Link href="/shop">
        <a
          className={`${styles.nav_link} ${
            (route === "/shop" || routeProduct) && styles.active
          }`}
        >
          Products
        </a>
      </Link>
      <Link href="/blogs">
        <a
          className={`${styles.nav_link} ${
            route === "/blogs" && styles.active
          }`}
        >
          Blogs
        </a>
      </Link>
    </nav>
  );
};

export default Links;
