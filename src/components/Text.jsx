import React from "react";

const Text = ({ className = "", children }) => {
  return <p className={`text-xl text-white ${className}`}>{children}</p>;
};

export default Text;
