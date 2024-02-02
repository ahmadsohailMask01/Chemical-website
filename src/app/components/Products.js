import React from "react";
import Productslist from "./Products_List";
import styles from "../../../styles/products.module.css";
import Link from "next/link";
import { BASE_API_URL } from "../../../utils/constants";

const Products = () => {
  if (!BASE_API_URL) {
    return null;
  }
  return (
    <>
      <section className={styles.section_products}>
        <div className={styles.products_container}>
          {!BASE_API_URL ? <span>No Products Found</span> : <Productslist />}
        </div>
      </section>
    </>
  );
};

export default Products;
