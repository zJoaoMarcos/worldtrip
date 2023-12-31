import { Flex } from "@chakra-ui/react";

import { SwiperSlide } from "swiper/react";
import { Slider } from "./Slider";
import { SliderContent } from "./SliderContent";

interface ContinentsSlidesProps {
  continents: {
    id: string;
    slide: string;
    altSlide: string;
    name: string;
    description: string;
  }[];
}

export function ContinentsSlides({ continents }: ContinentsSlidesProps) {
  return (
    <Flex
      w="100%"
      maxW="1440px"
      px={{ base: "0", md: "8.75rem" }}
      mx="auto"
      h={{ base: "15.625rem", md: "28.125rem" }}
      my={{ base: "5px", md: "5" }}
      mb={{ base: "1.5rem", md: "2.5rem" }}
    >
      <Slider>
        {continents?.map((continent) => {
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
