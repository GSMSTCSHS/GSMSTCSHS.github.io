import React from "react";

const SponsorsAndOfficers = () => {
  return (
    <div className="w-19/20 max-w-5xl bg-cshs-900 p-5 rounded-2xl text-white font-display text-center m-5">
      <p className="text-3xl sm:text-4xl md:text-5xl">2025-2026 Officers and Sponsors</p>
      <div className="text-xl sm:text-3xl md:text-4xl bg-amber-100 text-cshs-900 rounded-xl p-3 my-3 font-medium">
        <p>Sponsors: Julia Rachkovskiy & Ben Schepens</p>
      </div>
      <div className="grid grid-cols-2 gap-4 text-lg sm:text-2xl">
        <p>
          President: <br />
          Elizabeth Tsiporkin
        </p>
        <p>
          Senior Technical Lead: <br /> Brian Zhou
        </p>
        <p>
          Vice President: <br /> TBD
        </p>
        <p>
          Junior Technical Lead: <br />
          TBD
        </p>
        <p>
          Project Manager: <br />
          Minh Nguyen
        </p>
        <p>
          Secretary: <br /> TBD
        </p>
      </div>
    </div>
  );
};

export default SponsorsAndOfficers;
