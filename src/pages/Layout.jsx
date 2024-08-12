import { Link, Outlet } from "react-router-dom";
import styles from "../App.module.css";

export const Layout = () => {
  return (
    <div>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Outlet></Outlet>
      </section>
    </div>
  );
};

