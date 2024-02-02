import React from "react";
import Products from "../components/Products";
import { BASE_API_URL } from "../../../utils/constants";

const page = () => {
  if (!BASE_API_URL) {
    return null;
  }
  return <>{!BASE_API_URL ? <span>No Products found</span> : <Products />}</>;
};

export default page;
