import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full text-left text-lg">
      <div className="flex h-[calc(100vh-100px)]">
        {" "}
        {/* 100px is/was the width of the navbar */}
        <div className="w-[60%] h-full justify-items-center place-content-center">
          <Image src="/icon.png" width={400} height={400} alt="CSHS Logo" />
        </div>
        <div className="h-full w-[40%] bg-info gap-16 p-8 place-content-center">
          <p>
            Welcome to GSMST's Computer Science Honor Society website!
          </p>
        </div>
      </div>
      <div className="flex h-[calc(100vh-100px)]">
        {/* 100px is/was the width of the navbar */}
        <div className="h-full w-[40%] bg-info gap-16 p-8 place-content-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            facilisis convallis tellus, at sollicitudin lorem. Pellentesque
            luctus ipsum at erat pretium pretium. Ut vel semper ipsum. Mauris
            varius cursus nisl, at imperdiet purus vulputate viverra. Quisque
            posuere augue in vestibulum ultrices. Pellentesque malesuada ac nisl
            non placerat. Quisque auctor augue diam, non vulputate ante cursus
            congue. Vestibulum sit amet nibh sit amet sem laoreet elementum.
            Integer ut orci metus. Nunc non velit faucibus, consectetur arcu id,
            pharetra justo. Ut tempor eu tellus vestibulum finibus. Nullam at
            tempor ipsum. Phasellus finibus est ut suscipit fermentum. Phasellus
            iaculis enim nec felis sodales lacinia. Donec aliquet porttitor
            enim, ac hendrerit nibh iaculis nec.
          </p>
        </div>
        <div className="w-[60%] h-full justify-items-center place-content-center">
          <h1 className="text-5xl font-bold">Member Elegibility</h1>
        </div>
      </div>
    </main>
  );
}
