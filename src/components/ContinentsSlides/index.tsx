import { Flex } from "@chakra-ui/react";

import { continents } from "@/utils/continents";
import { SwiperSlide } from "swiper/react";
import { Slider } from "./Slider";
import { SliderContent } from "./SliderContent";

export function ContinentsSlides() {
  return (
    <Flex
      w="100%"
      maxW="1440px"
      px="8.75rem"
      mx="auto"
      h="28.125rem"
      my="5"
      mb="10"
    >
      <Slider>
        {continents.map((continent) => {
          return (
            <SwiperSlide key={continent.id}>
              <SliderContent continent={continent} />
            </SwiperSlide>
          );
        })}
      </Slider>
    </Flex>
  );
}
