import React from "react";

const page = () => {
  return (
    <main className="min-h-[calc(100dvh-64px)] bg-background place-content-center place-items-center m-2">
      <div className="rounded-2xl bg-cshs-900 p-3">

      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&title&showCalendars=0&showTz=0&src=Y3Noc2dzbXN0QGdtYWlsLmNvbQ&color=%23039be5"
        width="800"
        height="600"
        className="rounded-xl aspect-4/3 w-full"
      />
      </div>
    </main>
  );
};

export default page;
