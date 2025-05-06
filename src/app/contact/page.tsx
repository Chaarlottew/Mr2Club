"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-black text-white">
      <div className="relative h-[200vh] w-full scroll-smooth">
        {/* Main Image */}
        <div className="relative top-0 h-[90vh] w-full z-0">
          <Image
            src="/images/10.JPG"
            alt="Main Page Image"
            fill
            className="object-cover w-full h-full"
          />
          {/* Text on top of the image */}
          <div className="absolute bottom-[10%] right-10 text-center text-white font-[Abhaya Libre] text-[80px] font-bold">
            CONTACT US
          </div>
          <div className="absolute bottom-[5%] right-10 text-center text-white font-[Abhaya Libre] text-[30px] font-bold">
            [FACEBOOK AND INSTAGRAM]
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex w-full h-[600px] bg-black px-10 gap-10 py-10 border-t border-white">
          {/* Instagram */}
          <a
            href="https://instagram.com/mr2_nsw"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-center items-center w-1/2 h-full bg-[#1c1c1e] rounded-xl border border-gray-700 hover:bg-[#262628] transition-all duration-300 p-10 text-center"
          >
            <div className="flex items-center justify-center space-x-3">
              {/* Instagram SVG Icon */}
              <svg
                className="w-12 h-12 text-pink-500 group-hover:scale-105 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 3H5c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2V5c0-1.104-.896-2-2-2zM12 7a5 5 0 110 10 5 5 0 010-10zm7 1a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
              <div className="text-[40px] font-bold text-pink-500 group-hover:scale-105 transition-transform">
                INSTAGRAM
              </div>
            </div>
            <p className="text-[10px] text-white opacity-80">@mr2_nsw</p>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/mr2_nsw"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-center items-center w-1/2 h-full bg-[#1c1c1e] rounded-xl border border-gray-700 hover:bg-[#262628] transition-all duration-300 p-10 text-center"
          >
            <div className="flex items-center justify-center space-x-3">
              {/* Correct Facebook SVG Icon */}
              <svg
                className="w-12 h-12 text-blue-600 group-hover:scale-105 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.492v-9.294H9.693v-3.622h3.124V9.410c0-3.074 1.804-4.794 4.589-4.794 1.335 0 2.728.238 2.728.238v3.01h-1.539c-1.521 0-1.998.946-1.998 1.907v2.347h3.395l-.541 3.622h-2.854v9.294h5.597c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
              <div className="text-[40px] font-bold text-blue-600 group-hover:scale-105 transition-transform">
                FACEBOOK
              </div>
            </div>
            <p className="text-[10px] text-white opacity-80">
              MR2 Owners Club Of Australia - NSW Branch
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
