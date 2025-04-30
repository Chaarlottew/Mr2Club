"use client";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

export default function Events() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-black text-white">
      <div className="relative h-[200vh] w-full scroll-smooth">
        {/* Main Image */}
        <div className="relative top-0 h-[90vh] w-full z-0">
          <Image
            src="/images/test3.jpg"
            alt="Main Page Image"
            fill
            className="object-cover w-full h-full"
          />
          {/* Text on top of the image */}
          <div className="absolute bottom-[10%] right-10 text-center text-white font-[Abhaya Libre] text-[100px] font-bold">
            PREVIOUS EVENTS
          </div>
          <div className="absolute bottom-[5%] right-10 text-center text-white font-[Abhaya Libre] text-[50px] font-bold">
            [OF NEW SOUTH WALES]
          </div>
        </div>
        
        {/* Previous Events List */}
        <div className="flex w-full h-[1200px] bg-black px-10 gap-10 py-10 border-t border-white ">
          {/* Event 1 */}
          <Link
            href="/previousEvents/waterfallCafe"
            className="group relative w-1/2 h-full"
          >
            <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90">
              <Image
                src="/images/prev2.jpg"
                alt="19th May 2024 - Waterfall Cafe"
                fill
                className="object-cover"
              />
              <div className="absolute top-6 left-6  text-white text-[70px] font-bold [text-shadow:_1px_1px_0_#000,_-1px_-1px_0_#000] ">
                <h2 className=" ">19th May 2024</h2>
                <p className="text-[50px]">[WATERFALL CAFE]</p>
              </div>
            </div>
          </Link>

          {/* Event 2 */}
          <Link
            href="/previousEvents/SOP1"
            className="group relative w-1/2 h-full"
          >
            <div className="w-full h-full relative transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90">
              <Image
                src="/images/prev3.jpg"
                alt="2nd July 2023 - Sydney Olympic Park"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-6 right-6 text-white text-[70px] font-bold [text-shadow:_1px_1px_0_#000,_-1px_-1px_0_#000] flex flex-col items-end">
              <h2 className="text-[70px]">2nd July 2023</h2>
              <p className="text-[50px]">[SYDNEY OLYMPIC PARK]</p>
            </div>
          </Link>
        </div>
        <div className="flex w-full h-[1200px] bg-black px-10 gap-10 pb-10 border-b border-white ">
          {/* Event 3 */}
          <Link
            href="/previousEvents/nasho"
            className="group relative w-1/2 h-full"
          >
            <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90">
              <Image
                src="/images/prev4.jpg"
                alt="22nd April 2023 - Royal National Park"
                fill
                className="object-cover"
              />
              <div className="absolute top-6 left-6  text-white text-[70px] font-bold [text-shadow:_1px_1px_0_#000,_-1px_-1px_0_#000] ">
                <h2 className=" ">22nd April 2023</h2>
                <p className="text-[50px]">[ROYAL NATIONAL PARK]</p>
              </div>
            </div>
          </Link>

          {/* Event 4 */}
          <Link
            href="/previousEvents/SOP2"
            className="group relative w-1/2 h-full"
          >
            <div className="w-full h-full relative transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90">
              <Image
                src="/images/prev5.jpg"
                alt="21st January 2023"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-6 right-6 text-white text-[70px] font-bold [text-shadow:_1px_1px_0_#000,_-1px_-1px_0_#000] flex flex-col items-end">
              <h2 className="text-[70px]">21st January 2023</h2>
              <p className="text-[50px]">[SYDNEY OLYMPIC PARK]</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
