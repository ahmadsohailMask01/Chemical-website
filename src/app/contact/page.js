import React from "react";
import Contact from "../components/contact";
import { BASE_API_URL } from "../../../utils/constants";

const page = () => {
  if (!BASE_API_URL) {
    return null;
  }
  return (
    <>
      <Contact />
    </>
  );
};

export default page;
