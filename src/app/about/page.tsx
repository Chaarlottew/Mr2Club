"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="relative">
      {/* Main Image */}
      <div className="relative w-full h-[100vh]">
        <Image
          src="/images/16.jpg"
          alt="Main Page Image 2"
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text on top of the image */}
      <div className="absolute top-[22%] left-0 right-0 text-center text-white font-[Abhaya Libre] text-[100px] font-bold">
        MR2 OWNERS CLUB
      </div>
      <div className="absolute top-[37%] left-0 right-0 text-center text-white font-[Abhaya Libre] text-[50px] font-bold">
        [OF NEW SOUTH WALES]
      </div>
      <div className="absolute top-[45%] left-0 right-0 text-center text-white font-[Abhaya Libre] text-[50px] font-bold">
        [ABOUT US COMING SOON]
      </div>
    </div>
  );
}
