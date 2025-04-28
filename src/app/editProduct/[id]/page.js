"use client";
import React, { useEffect, useState } from "react";
import EditProduct from "@/app/components/editProduct";
import { BASE_API_URL } from "../../../../utils/constants";
import Load from "@/app/components/load";

const page = ({ params }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = params;
  const getProductbyId = (id) => {
    try {
      fetch(`${BASE_API_URL}/api/products/${id}`, {
        method: "GET",
        cache: "no-store",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch Product");
          }
          return res.json();
        })
        .then((data) => {
          console.log("Data", data);
          setData(data.product);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductbyId(id);
  }, []);
  return (
    <>
      {loading && <Load />}
      {data ? (
        <EditProduct
          id={data._id}
          title={data.product_title}
          price={data.product_price}
          description={data.product_description}
        />
      ) : null}
    </>
  );
};

export default page;
