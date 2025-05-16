"use client";

import React, { useState } from "react";
import styles from "../../../styles/addProduct.module.css";
import { RiArrowGoBackLine } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { toast as notify } from "react-toastify";
import { BASE_API_URL } from "../../../utils/constants";

const AddProduct = () => {
  const [product_title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [product_price, setPrice] = useState("");
  const [product_description, setDescription] = useState("");
  const router = useRouter();
  const [active, setActive] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await fetch(`${BASE_API_URL}/api/products`, {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         product_title,
  //         product_price,
  //         product_description,
  //       }),
  //     });

  //     notify.success("Product Created Successfully");
  //     router.push("/admin_dashboard");
  //     router.refresh();
  //   } catch (error) {
  //     notify.error("Failed to create a Product", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Select an image");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("product_title", product_title);
    formData.append("product_price", product_price);
    formData.append("product_description", product_description);

    const res = await fetch(`${BASE_API_URL}/api/products`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);
    alert(data.message || "Upload done!");
  };

  return (
    <>
      <section className={styles.form_section}>
        <Link href={"/admin_dashboard"} title="Go back to products">
          <RiArrowGoBackLine className={styles.go_back} />
        </Link>
        <div className={styles.form_container}>
          <label className={styles.form_head}>
            Here You can Add your Product
          </label>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={product_title}
              className={styles.input}
              placeholder="Product Title"
              required={true}
            />
            <input
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              value={product_price}
              className={styles.input_price}
              placeholder="Product Price in PKR"
              required={true}
            />
            <textarea
              className={styles.textarea}
              onChange={(e) => setDescription(e.target.value)}
              value={product_description}
              placeholder="Product Description"
              required={true}
            />
            <div
              style={{
                width: `100%`,
                display: `flex`,
                flexDirection: `row`,
                justifyContent: `space-between`,
                alignItems: `center`,
              }}
            >
              <label htmlFor="">Select Product Picture</label>
              <input
                style={{
                  width: `70%`,
                  border: `1px solid darkgrey`,
                  padding: `2%`,
                  borderRadius: `10px`,
                  cursor: `pointer`,
                }}
                id="product-pic-label"
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
                required
              />
            </div>
            <button
              type="submit"
              className={styles.button}
              title="Create Product"
              onClick={() => setActive(!active)}
            >
              Create!
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddProduct;
