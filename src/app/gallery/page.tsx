"use client";

import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "next/image";

// 👇 Your selected image list
const imageList = [
  "/images/aboutus.png",
  "/images/aboutus2.png",
  "/images/carousel3.jpg",
  "/images/camswharf2.jpg", //vertical

  "/images/event1.jpg", //hortizontal
  "/images/camswharf.jpg", // horitzontal
  "/images/carousel1.jpg", //vertical
  "/images/carousel2.jpg", //vertical
  "/images/carousel3.jpg", //vertical
  "/images/event3.jpg", //vertical
  "/images/event22.png", //vertical
  "/images/mainpage.jpg", //vertical
  "/images/mainpage2.jpg", //vertical
  "/images/nasho1.jpg", //vertical
  "/images/nasho2.jpg", //vertical
  "/images/prev1.jpg", //vertical
  "/images/prev2.jpg", //vertical
  "/images/prev4.jpg", //vertical
  "/images/prev5.jpg", //vertical
  "/images/sop2.jpg", //vertical
  "/images/sop11.png", //vertical
  "/images/sop12.png", //vertical
  "/images/sop21.jpg", //vertical
  "/images/waterfall1.jpg", //vertical
  "/images/waterfall2.png", //vertical
  "/images/1.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
  "/images/11.jpg",
  "/images/12.jpg",
];

const IMAGES_PER_LOAD = 20;

const GalleryPage = () => {
  const [visibleImages, setVisibleImages] = useState<string[]>([]);
  const [shuffledList, setShuffledList] = useState<string[]>([]);

  useEffect(() => {
    setVisibleImages(imageList.slice(0, IMAGES_PER_LOAD));
  }, []);

  const fetchMoreData = () => {
    const currentLength = visibleImages.length;
    const nextImages = shuffledList.slice(
      currentLength,
      currentLength + IMAGES_PER_LOAD
    );
    setVisibleImages((prev) => [...prev, ...nextImages]);
  };
  const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  useEffect(() => {
    const shuffledImages = shuffleArray(imageList);
    setVisibleImages(shuffledImages.slice(0, IMAGES_PER_LOAD));
    // Optional: store full shuffled list if you want future loads to continue it
    setShuffledList(shuffledImages); // if you move imageList to state
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative top-0 h-[90vh] w-full z-0">
        <Image
          src="/images/gallery.jpg"
          alt="Main Page Image"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-[10%] left-10 text-white font-[Abhaya Libre] text-[100px] font-bold">
          GALLERY
        </div>
        <div className="absolute bottom-[5%] left-10 text-white font-[Abhaya Libre] text-[50px] font-bold">
          [OF NEW SOUTH WALES]
        </div>
      </div>

      {/* Gallery Section */}
      <InfiniteScroll
        dataLength={visibleImages.length}
        next={fetchMoreData}
        hasMore={visibleImages.length < imageList.length}
        loader={<h4 className="text-center py-4">Loading...</h4>}
        scrollThreshold={0.6}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
          {visibleImages.map((src, index) => (
            <div
              key={index}
              className="w-full h-150 overflow-hidden rounded-xl"
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default GalleryPage;
