import { ReactNode } from "react";

import { Swiper, SwiperProps } from "swiper/react";

//import Modules
import {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/effect-fade";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

interface SliderProps extends SwiperProps {
  children: ReactNode;
}

export function Slider({ children, ...rest }: SliderProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
      effect="fade"
      slidesPerView={1}
      spaceBetween={0}
      centeredSlides
      navigation={{ enabled: true }}
      pagination={{ clickable: true, type: "bullets" }}
      autoplay={{ delay: 4000 }}
      scrollbar={{ draggable: true }}
      style={{
        width: "100%",
        flex: "1",
      }}
      {...rest}
    >
      {children}
    </Swiper>
  );
}
