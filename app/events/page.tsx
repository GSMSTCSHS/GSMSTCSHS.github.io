import React from "react";
import Section from "../components/section";

const page = () => {
  return (
    <Section
      isContentLeft={true}
      contentLeft={
        <p>Left text</p>
      }
      contentRight={
        <p className="text-center">
          Right text
        </p>
      }
    />
  );
};

export default page;
