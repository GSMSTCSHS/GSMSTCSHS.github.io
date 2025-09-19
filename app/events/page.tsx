import React from "react";
import Section from "../components/section";

const page = () => {
  return (
    <Section
      isContentLeft={true}
      headerText="Events"
      content={<p className="text-center">Right text</p>}
    />
  );
};

export default page;
