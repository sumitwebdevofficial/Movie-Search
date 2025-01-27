import React from "react";

const Title = ({ className = "", children }) => {
  return <h1 className={`text-4xl lg:text-5xl text-green-400 font-semibold ${className}`}>{children}</h1>;
};

export default Title;
