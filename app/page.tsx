import Section from "./components/section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full text-left text-lg">
      <Section
        isContentLeft={true}
        contentLeft={
          <Image src="/icon.png" width={400} height={400} alt="CSHS Logo" />
        }
        contentRight={
          <p className="text-center text-4xl">Welcome to GSMST's Computer Science Honor Society website!</p>
        }
      />
      <Section
        isContentLeft={false}
        contentLeft={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec.
          </p>
        }
        contentRight={
          <h1 className="text-5xl font-bold">Member Elegibility</h1>
        }
      />
    </main>
  );
}
