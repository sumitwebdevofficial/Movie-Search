import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className=" bg-stone-900 h-dvh">
      <div className="container h-full">
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-8xl font-bold">404</h1>
            <h2 className="text-7xl font-semibold mt-5">Page not found</h2>
            <Link to="/" className="mt-6 bg-green-400 text-stone-950 py-3 px-6 text-xl font-medium rounded-full inline-block hover:bg-green-500 transition-colors">
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
