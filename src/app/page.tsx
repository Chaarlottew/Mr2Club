"use client";

import Image from "next/image";
import Carousel from "@/components/carousel";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  {
    /* 3 images for the carousel */
  }
  const myPanels = [
    { src: "/images/carousel1.jpg", label: "New Events", href: "/events" },
    { src: "/images/carousel2.JPG", label: "About Us", href: "/about" },
    { src: "/images/carousel3.JPG", label: "Gallery", href: "/gallery" },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative bg-black text-white">
      <div className="relative h-[200vh] w-full scroll-smooth">
        {/* Sticky Main Image */}
        <div className="sticky top-0 h-[90vh] w-full z-0">
          <Image
            src="/images/mainpage.jpg"
            alt="Main Page Image"
            fill
            className="object-cover w-full h-full"
          />
          {/* Text on top of the image */}
          <div className="absolute top-[25%] left-0 right-0 text-center text-white font-[Abhaya Libre] text-[80px] font-bold">
            MR2 OWNERS CLUB
          </div>
          <div className="absolute top-[40%] left-0 right-0 text-center text-white font-[Abhaya Libre] text-[30px] font-bold">
            [OF NEW SOUTH WALES]
          </div>
        </div>

        {/* Scroll-over background image with carousel */}
        <div className="absolute top-[90vh] left-0 w-full z-10">
          <div className="w-full bg-black pt-10 pb-10 border-y-1 border-white ">
            <Carousel panels={myPanels} />
          </div>
        </div>
        {/* Next Background Image */}
        <div className="relative w-full h-[250vh]">
          <Image
            src="/images/mainpage2.JPG"
            alt="Main Page Image 2"
            fill
            className="object-cover w-full h-full"
          />

          {/* Contact Us Text */}
          <div className="absolute top-[30%] left-0 right-0 text-center z-10 overflow-hidden">
            <Link href="/contact">
              <div className="flex flex-col items-center gap-4">
                <div className="w-1/5 h-[1px] bg-white"></div>
                <h2 className="text-white font-[Abhaya Libre] text-[100px] font-bold transition-transform duration-300 hover:scale-105 hover:-translate-y-2  ">
                  Contact Us
                </h2>
                <p className="text-white text-3xl mt-4 font-light">
                  We&apos;d love to hear from you.
                </p>
                <div className="w-1/5 h-[2px] bg-white"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
