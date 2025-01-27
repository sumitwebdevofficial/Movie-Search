import React from "react";
import { Section, Container } from "../components/index";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Section className="py-0">
      <Container className="h-dvh">
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">404</h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mt-3 md:mt-5">Page not found</h2>
            <Link to="/" className="mt-4 md:mt-6 bg-green-400 text-stone-950 py-2 px-4 lg:py-3 lg:px-6 text-lg md:text-xl font-medium rounded-full inline-block hover:bg-green-500 transition-colors">
              Go to Home
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default NotFound;
