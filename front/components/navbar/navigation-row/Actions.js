import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

import { IoPersonOutline } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { backdropActions } from "../../../store/backdrop";
import { authActions } from "../../../store/auth";
import { searchActions } from "../../../store/search";
import { cartActions } from "../../../store/cart";

import styles from "../Navbar.module.css";
import Auth from "../../auth/Auth";
import Search from "../../search/Search";
import CartDrawer from "../../cart/drawer/CartDrawer";

const Actions = () => {
  const auth = useSelector((state) => state.auth);
  const search = useSelector((state) => state.search);
  const cart = useSelector((state) => state.cart);

  const disptach = useDispatch();

  const actionTriggerHandler = (action) => {
    disptach(backdropActions.open());
    disptach(action.open());
  };

  return (
    <div className="flex items-center justify-end gap-3">
      <button
        type="button"
        className={`${styles.nav_link} ${styles.nav_action}`}
        onClick={() => actionTriggerHandler(authActions)}
      >
        <IoPersonOutline className={styles.navbar_icon} />
      </button>
      <AnimatePresence>{auth.show && <Auth />}</AnimatePresence>
      <button
        type="button"
        className={`${styles.nav_link} ${styles.nav_action}`}
        onClick={() => actionTriggerHandler(searchActions)}
      >
        <RiSearchLine className={styles.navbar_icon} />
      </button>
      <AnimatePresence>{search.show && <Search />}</AnimatePresence>
      <Link href="/wishlist">
        <a className={`${styles.nav_link} ${styles.nav_action}`}>
          <AiOutlineHeart className={styles.navbar_icon} />
        </a>
      </Link>
      <button
        type="button"
        className={`${styles.nav_link} ${styles.nav_action}`}
        onClick={() => actionTriggerHandler(cartActions)}
      >
        <BsCart2 className={styles.navbar_icon} />
      </button>
      <AnimatePresence>{cart.show && <CartDrawer />}</AnimatePresence>
    </div>
  );
};

export default Actions;
