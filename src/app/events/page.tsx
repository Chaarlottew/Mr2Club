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
            src="/images/event1.JPG"
            alt="Main Page Image"
            fill
            className="object-cover w-full h-full"
          />
          {/* Text on top of the image */}
          <div className="absolute bottom-[10%] right-10 text-center text-white font-[Abhaya Libre] text-[80px] font-bold">
            EVENTS
          </div>
          <div className="absolute bottom-[5%] right-10 text-center text-white font-[Abhaya Libre] text-[30px] font-bold">
            [OF NEW SOUTH WALES]
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="flex w-full h-[1200px] bg-black px-10 gap-10 py-10 border-y-1 border-white ">
          {/* Event 1 */}
          <Link
            href="/events/cams-wharf"
            className="group relative w-1/2 h-full"
          >
            <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90">
              <Image
                src="/images/event22.png"
                alt="18th May 2025 - Cams Wharf"
                fill
                className="object-cover"
              />
              <div className="absolute top-6 left-6  text-white text-[50px] font-bold [text-shadow:_1px_1px_0_#000,_-1px_-1px_0_#000] ">
                <h2 className=" ">18th May 2025</h2>
                <p className="text-[30px]">[CAMS WHARF]</p>
              </div>
            </div>
          </Link>

          {/* Event 2 */}
          <Link
            href="/events/toyota-nationals"
            className="group relative w-1/2 h-full"
          >
            <div className="w-full h-full relative transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90">
              <Image
                src="/images/event3.JPG"
                alt="19th April 2025 - Toyota Nationals"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-6 right-6 text-50px] font-bold [text-shadow:_1px_1px_0_#000,_-1px_-1px_0_#000]">
              <h2 className=" ">19th April 2025</h2>
              <p className="text-[30px]">[TOYOTA NATIONALS]</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
