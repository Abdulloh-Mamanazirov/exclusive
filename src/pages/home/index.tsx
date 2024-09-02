import React from "react";
import Hero from "./components/Hero";
import Section from "./components/Section";

const index = (): React.ReactElement => {
  return (
    <div className="md:container">
      <div>
        <Hero />
      </div>
      <div className="my-10">
        <Section />
      </div>
    </div>
  );
};

export default index;
