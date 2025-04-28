import React, { useEffect, useState } from "react";
import styles from "../../../styles/products.module.css";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
import RemoveButton from "./removeButton";
import { BASE_API_URL } from "../../../utils/constants";
import Load from "./load";

const AdminProductslist = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const getProducts = () => {
    try {
      fetch(`${BASE_API_URL}/api/products`, {
        method: "GET",
        cache: "no-store",
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data.products);
          setLoading(false);
        });
    } catch (error) {
      console.log("Error loading products: ", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  const pk_currency = Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 0,
  });

  return (
    <>
      {loading && <Load />}
      {data?.length <= 0
        ? "No Products to Show"
        : data?.map((t) => (
            <div
              className={styles.product}
              key={t._id}
              title={`Order ID = ${t._id}`}
            >
              <span className={`${styles.product_title} ${styles.select}`}>
                {t.product_title}
              </span>
              <span className={styles.select}>
                <strong className={styles.select}>Price:</strong>{" "}
                {pk_currency.format(t.product_price)} PKR
              </span>
              <span
                className={`${styles.product_description} ${styles.select}`}
              >
                <strong className={styles.select}>Description:</strong>{" "}
                {t.product_description}
              </span>
              <div className={styles.icons}>
                <RemoveButton id={t._id} />
                <Link
                  href={`/editProduct/${t._id}`}
                  title="Edit this Product"
                  className={styles.edit_btn}
                >
                  <FaEdit className={styles.icon2} />
                  Edit
                </Link>
              </div>
            </div>
          ))}
    </>
  );
};

export default AdminProductslist;
