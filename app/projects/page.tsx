import Image from "next/image";
import React from "react";
import Section from "../components/section";

const page = () => {
  return (
    <main>
      <Section
        isContentLeft={true}
        contentLeft={
          <Image src="/Samsung SFT.png" width={400} height={400} alt="Samsung Solve for Tomorrow Logo" />
      }
        contentRight={
        <p>Samsung SFT</p>
        }
      />
      <Section
        isContentLeft={false}
        contentLeft={
          <p className="text-center">
            Congressional app challenge
          </p>
        }
        contentRight={
          <Image src="/Congressional App Challenge.png" width={400} height={400} alt="Congressional App Challenge Logo" />
        }
      />
    </main>
  );
};

export default page;
