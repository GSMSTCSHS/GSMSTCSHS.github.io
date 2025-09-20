import Image from "next/image";
import React from "react";
import Section from "../components/section";

const page = () => {
  return (
    <main className="bg-background min-h-[calc(100dvh-64px)]">
      <Section
        isContentLeft={true}
        image={
          <Image
            src="/Samsung SFT.png"
            width={400}
            height={400}
            alt="Samsung Solve for Tomorrow Logo"
            className="pb-5"
          />
        }
        headerText="Samsung Solve For Tomorrow"
        content={<p>Samsung SFT</p>}
      />
      <Section
        isContentLeft={false}
        content={<p className="text-center">Congressional app challenge</p>}
        image={
          <Image
            src="/Congressional App Challenge.png"
            width={400}
            height={400}
            alt="Congressional App Challenge Logo"
            className="pb-5"
          />
        }
        headerText=" Congressional App Challenge"
      />
    </main>
  );
};

export default page;
