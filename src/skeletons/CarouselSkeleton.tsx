import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export function CarouselSkeleton() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="w-full"
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col max-w-2xs m-auto mt-16 md:flex-row md:max-w-2xl lg:max-w-4xl gap-4">

            {/* imagem */}
            <div className="w-72 h-72 bg-neutral-300 animate-pulse flex items-center justify-center lg:w-88 lg:h-88">
              <div className="h-8 w-8 border-2 border-neutral-600 border-t-transparent rounded-full animate-spin" />
            </div>

            {/* textos */}
            <div className="flex gap-5 flex-col">
              <div className="w-38 h-5 bg-neutral-300 animate-pulse" />
              <div className="w-36 h-4 bg-neutral-300 animate-pulse" />
              <div className="w-32 h-4 bg-neutral-300 animate-pulse" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
