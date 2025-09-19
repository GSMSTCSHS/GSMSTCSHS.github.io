import Image from "next/image";
import React from "react";
import Section from "../components/section";

const page = () => {
  return (
    <main>
      <Section
        isContentLeft={true}
        image= {

          <Image src="/Samsung SFT.png" width={400} height={400} alt="Samsung Solve for Tomorrow Logo" />
        }
        headerText={ "Samsung Solve for Tomorrow"
      }
        content={
        <p>Samsung SFT</p>
        }
      />
      <Section
        isContentLeft={false}
        content={
          <p className="text-center">
            Congressional app challenge
          </p>
        }
        image={
          <Image src="/Congressional App Challenge.png" width={400} height={400} alt="Congressional App Challenge Logo" />
        }
        headerText="Congressional App Challenge"
      />
    </main>
  );
};

export default page;
