import React from "react";
import Section from "../components/section";

const page = () => {
  return (
    <main>
      <Section
        isContentLeft={true}
        contentLeft={<h1 className="text-5xl font-bold">Service Requirements</h1>}
        contentRight={
          <p className="text-center">
            All members must complete 10 service hours per year to be eligible
            for a cord.
          </p>
        }
      />
      <div className="text-center w-full py-10">
        <h1 className="text-5xl font-bold">Service Opportunities</h1>
      </div>
      <Section
        isContentLeft={false}
        contentLeft={<h1 className="text-5xl font-bold">Service Opportunity 1</h1>}
        contentRight={
          <p className="text-center">
            Right text.
          </p>
        }
      />
    </main>
  );
};

export default page;
