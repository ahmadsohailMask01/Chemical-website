import React from "react";
import Productslist from "./Products_List";
import styles from "../../../styles/products.module.css";

import Load from "./load";

const Products = () => {
  return (
    <>
      <section className={styles.section_products}>
        <Productslist />
      </section>
    </>
  );
};

export default Products;
