import React, { ReactNode } from "react";

interface props {
  isContentLeft: boolean;
  contentLeft: ReactNode;
  contentRight: ReactNode;
}

const Section = (props: props) => {
  return (
    <div className="flex h-[calc(100vh-100px)] w-full">
      {/* 100px is/was the width of the navbar */}

      {/* Left div */}
      <div
        className={`h-full w-[${props.isContentLeft ? "40%" : "60%"}] ${
          props.isContentLeft ? "" : "bg-primary"
        } justify-items-center place-content-center`}
      >
        {props.contentLeft}
      </div>
      {/* Right div */}
      <div
        className={`h-full w-[${props.isContentLeft ? "60%" : "40%"}] ${
          props.isContentLeft ? "bg-blue-200" : ""
        } justify-items-center place-content-center`}
      >
        {props.contentRight}
      </div>
    </div>
  );
};

export default Section;
