import React from "react";

const Subtitle = ({ className = "", children }) => {
  return <h2 className={`text-2xl font-semibold text-green-300 ${className}`}>{children}</h2>;
};

export default Subtitle;
