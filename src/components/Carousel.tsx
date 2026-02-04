import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import 'swiper/swiper-bundle.css'
import { CarouselCard } from "./cards/CarouselCard";
import type { Art } from "../types/art";

type CarouselProps = {
  arts: Art[]
}

export function Carousel({arts}: CarouselProps) {

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

        {arts.map((art) => (
          <SwiperSlide key={art.id}>
            <CarouselCard art={art} />
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  )
}
