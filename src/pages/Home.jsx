import React from "react";
import SearchForm from "../components/SearchForm";
import Section from "../components/Section";
import Container from "../components/Container";

const Home = () => {
  return (
    <Section>
      <Container>
        <div className="max-w-4xl mx-auto text-center mt-20">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            The Largest Database of <span className="text-green-400">Movies</span> and <span className="text-green-400">Series</span>
          </h1>
          <SearchForm className="mt-4 sm:mt-8 md:mt-10 py-2 px-5 text-xl w-[70%]" placeholder="Search Here.." />
        </div>
      </Container>
    </Section>
  );
};

export default Home;
