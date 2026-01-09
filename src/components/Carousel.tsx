import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import 'swiper/swiper-bundle.css'
import { CarouselCard } from "./cards/CarouselCard";

export function Carousel() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full"
      >
        <SwiperSlide >
          <div
            className="relative w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('./gatinho.png')" }}
          >

            <div className="absolute inset-0 bg-[#BCA086]/70"></div>

            <div className="relative z-10 flex h-full items-center justify-center">
              <CarouselCard />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div
            className="relative w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('./gatinho.png')" }}
          >

            <div className="absolute inset-0 bg-[#a38162]/70"></div>

            <div className="relative z-10 flex h-full items-center justify-center">
              <CarouselCard />
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}
