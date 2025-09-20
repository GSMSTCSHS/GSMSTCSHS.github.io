import React, { ReactNode } from "react";
import Image from "next/image";

interface props {
  isContentLeft: boolean;
  headerText: string;
  content: ReactNode;
  image?: ReactNode;
}

const Section = (props: props) => {
  return (
    <div className="flex sm:h-[calc(100vh-64px)] w-full">
      {/* Left div */}
      <div
        className={`${
          !props.isContentLeft ? "flex-1" : "flex-2"
        }  justify-items-center place-content-center hidden sm:block`}
      >
        {!props.isContentLeft ? (
          <div className="h-8/10 w-full rounded-r-2xl bg-cshs-900 justify-items-center place-content-center p-5">
            {props.image !== undefined ? (
              props.image
            ) : (
              <Image src="/icon.png" width={300} height={300} alt="CSHS Logo" />
            )}
            <p className="text-5xl text-cshs-300 font-semibold text-center">
              {props.headerText}
            </p>
          </div>
        ) : (
          props.content
        )}
      </div>

      {/* Right div */}
      <div
        className={`${
          props.isContentLeft ? "flex-1" : "flex-2"
        } justify-items-center place-content-center hidden sm:block`}
      >
        {props.isContentLeft ? (
          <div className="h-9/10 w-full rounded-l-2xl bg-cshs-900 justify-items-center place-content-center">
            {props.image !== undefined ? (
              props.image
            ) : (
              <Image src="/icon.png" width={300} height={300} alt="CSHS Logo" />
            )}
            <p className="text-5xl text-cshs-300 font-semibold text-center">
              {props.headerText}
            </p>
          </div>
        ) : (
          props.content
        )}
      </div>
      {/* Mobile div */}
      <div className="flex flex-col sm:hidden py-4  items-center">
        <div className="bg-cshs-900 py-4 w-[90vw] rounded-xl">
          <p className="text-4xl text-cshs-300 font-semibold text-center">
            {props.headerText}
          </p>
        </div>
        {props.content}
      </div>
    </div>
  );
};

export default Section;
