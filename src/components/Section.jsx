import React from "react";

const Section = ({ className = "", children }) => {
  return <section className={`bg-stone-900 flex-grow py-10 ${className}`}>{children}</section>;
};

export default Section;
