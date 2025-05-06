"use client";

import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "next/image";

// 👇 Your selected image list
const imageList = [
  "/images/aboutus.png",
  "/images/aboutus2.png",
  "/images/carousel3.JPG",
  "/images/camswharf2.jpg", //vertical

  "/images/event1.JPG", //hortizontal
  "/images/camswharf.JPG", // horitzontal
  "/images/carousel1.jpg", //vertical
  "/images/carousel2.JPG", //vertical
  "/images/carousel3.JPG", //vertical
  "/images/event3.JPG", //vertical
  "/images/event22.png", //vertical
  "/images/mainpage.jpg", //vertical
  "/images/mainpage2.JPG", //vertical
  "/images/nasho1.JPG", //vertical
  "/images/nasho2.JPG", //vertical
  "/images/prev1.JPG", //vertical
  "/images/prev2.JPG", //vertical
  "/images/prev4.JPG", //vertical
  "/images/prev5.JPG", //vertical
  "/images/sop2.JPG", //vertical
  "/images/sop11.png", //vertical
  "/images/sop12.png", //vertical
  "/images/sop21.JPG", //vertical
  "/images/waterfall1.JPG", //vertical
  "/images/waterfall2.png", //vertical
  "/images/1.JPG",
  "/images/3.JPG",
  "/images/4.JPG",
  "/images/5.JPG",
  "/images/6.JPG",
  "/images/7.JPG",
  "/images/8.JPG",
  "/images/9.JPG",
  "/images/10.JPG",
  "/images/11.JPG",
  "/images/12.JPG",
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
          src="/images/gallery.JPG"
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
              <Image
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
