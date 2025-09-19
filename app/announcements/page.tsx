import React from "react";
import Section from "../components/section";

const page = () => {
  return (
    <div className="min-h-[calc(100dvh-64px)] bg-background">
      <Section
        isContentLeft={false}
        headerText="Announcements"
        content={<p className="text-center">Right text.</p>}
      />
    </div>
  );
};

export default page;
