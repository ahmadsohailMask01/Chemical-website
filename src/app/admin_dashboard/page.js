import React from "react";
import Admin_Dashboard from "../components/admin_dashboard";
import { BASE_API_URL } from "../../../utils/constants";

const page = () => {
  if (!BASE_API_URL) {
    return null;
  }
  return (
    <>{!BASE_API_URL ? <span>No Products Found</span> : <Admin_Dashboard />}</>
  );
};

export default page;
