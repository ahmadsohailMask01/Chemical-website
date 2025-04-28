"use client";
import React from "react";
import AdminProductslist from "./AdminProductslist";
import styles from "../../../styles/products.module.css";
import Link from "next/link";
import Load from "./load";

const Admin_Products = () => {
  return (
    <>
      <section className={styles.section_products}>
        <Link href={"/addProduct"} className={styles.btn} title="Add Product">
          Add Product
        </Link>
        <div className={styles.products_container} id="container">
          <AdminProductslist />
        </div>
      </section>
    </>
  );
};

export default Admin_Products;
