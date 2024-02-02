import React from "react";
import AddProduct from "../components/addproduct";
import { BASE_API_URL } from "../../../utils/constants";

const page = () => {
  if (!BASE_API_URL) {
    return null;
  }
  return (
    <>
      <AddProduct />
    </>
  );
};

export default page;
