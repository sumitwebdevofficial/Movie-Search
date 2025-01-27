import React from "react";
import Section from "./Section";
import Container from "./Container";

const Loading = () => {
  return (
    <Section>
      <Container>
        <h1 className="text-4xl text-white p-4 md:text-6xl md:p-8 font-bold">Loading...</h1>
      </Container>
    </Section>
  );
};

export default Loading;
