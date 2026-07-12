//src/components/Carousel.jsx
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel({ images, autoPlay = true, interval = 5000 }) {
  const [loadedImages, setLoadedImages] = useState({});
  const progressRef = useRef(null);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  // Swiper's native timer hook for the progress bar
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressRef.current) {
      // Progress goes from 1 to 0, so we invert it for a 0% to 100% width
      progressRef.current.style.width = `${(1 - progress) * 100}%`;
    }
  };

  return (
    <div className="relative w-full aspect-[16/10] rounded-[20px] overflow-hidden group border border-[rgba(255,255,255,0.05)] shadow-xl bg-[rgba(20,20,25,0.8)] z-20">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }} // Ensures buttery smooth transitions
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={
          autoPlay ? { delay: interval, disableOnInteraction: false } : false
        }
        loop={true}
        observer={true}
        observeParents={true}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-full h-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className="relative w-full h-full">
            {!loadedImages[i] && (
              <div className="absolute inset-0 bg-[#1a1a24] animate-pulse flex items-center justify-center z-10">
                <div className="w-8 h-8 border-4 border-[#f5a623]/20 border-t-[#f5a623] rounded-full animate-spin"></div>
              </div>
            )}
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              onLoad={() => handleImageLoad(i)}
              className={`w-full h-full object-cover transition-opacity duration-700 ${
                loadedImages[i] ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60" />
          </SwiperSlide>
        ))}

        {/* Animated Loading Bar Indicator */}
        {autoPlay && (
          <div
            className="absolute bottom-0 left-0 h-1.5 bg-[#f5a623] z-30 transition-none"
            ref={progressRef}
          />
        )}
      </Swiper>
    </div>
  );
}
