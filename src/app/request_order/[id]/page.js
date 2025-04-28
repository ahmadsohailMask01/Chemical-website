"use client";
import React, { useEffect, useState } from "react";
import Request_Product from "../../components/request_order";
import { BASE_API_URL } from "../../../../utils/constants";
import Load from "@/app/components/load";

const page = ({ params }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const getProductbyId = async (id) => {
    try {
      await fetch(`${BASE_API_URL}/api/products/${id}`, {
        cache: "no-store",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Data:", data);

          setData(data);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const { id } = params;
  useEffect(() => {
    getProductbyId(id);
  }, []);
  return (
    <>
      {loading ? <Load /> : null}
      {data ? (
        <Request_Product
          id={id}
          title={data.product.product_title}
          price={data.product.product_price}
        />
      ) : null}
    </>
  );
};

export default page;
