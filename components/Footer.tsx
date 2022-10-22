import Image from "next/image";
import fitness_tracker_bro from "public/fitness_tracker_bro.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      {/* <Image
        alt="Fitness Tracker Bro"
        src={fitness_tracker_bro}
        width={500}
        height={500}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      /> */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between text-gray-300">
          <h1 className="text-xl lg:text-3xl font-bold">Phrancois Fit</h1>
          <a href="https://storyset.com/data">Data illustrations by Storyset</a>
        </div>
      </div>
    </footer>
  );
}
