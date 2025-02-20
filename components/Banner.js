"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const bannerImages = [
  { src: "/banner1.jpg", alt: "Banner Image 1" },
  { src: "/banner2.jpg", alt: "Banner Image 2" },
  { src: "/banner3.jpg", alt: "Banner Image 3" },
];

const Banner = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-full"
      >
        {bannerImages.map((image, index) => (
          <SwiperSlide key={index} className="relative w-full h-[500px]">
            {/* Background Image */}
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover opacity-90"
                priority // Keep this for important images
                placeholder="empty" // Remove placeholder icon
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 text-center px-4 z-50">
        <h1 className="text-4xl md:text-6xl font-bold">We are proud students of</h1>
        <p className="mt-4 text-lg md:text-2xl text-green-500">Oxfront University</p>
        <a
          href="/about"
          className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Banner;
