import React from "react";
import styles from "../../../styles/admin.module.css";
import Admin_Products from "./Admin_products";
import Logout from "./logout";
import { BASE_API_URL } from "../../../utils/constants";

const Admin_Dashboard = () => {
  if (!BASE_API_URL) {
    return null;
  }
  return (
    <>
      <section className={styles.admin_sec}>
        <div className={styles.admin_container}>
          <label className={styles.admin_head}>
            Welcome to Admin Dashboard
          </label>
          <Logout />
        </div>
        {!BASE_API_URL ? <span>No Product Found</span> : <Admin_Products />}
      </section>
    </>
  );
};

export default Admin_Dashboard;
