import React from "react";
import Section from "../components/section";
import Banner from "../components/banner";

const page = () => {
  return (
    <main className="bg-background">
      <Banner text="Service Opportunities" className="bg-cshs-700" />
      <Section
        isContentLeft={false}
        headerText="Service Opportunity 1"
        content={<p className="text-center">Right text.</p>}
      />
    </main>
  );
};

export default page;
