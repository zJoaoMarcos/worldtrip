import { Flex } from "@chakra-ui/react";

import { continents } from "@/utils/continents";
import { Slider } from "./Slider";
import { SliderContent } from "./SliderContent";

export function ContinentsSlides() {
  return (
    <Flex w="100%" maxW="1240px" mx="auto" px="20" h="28.125rem" my="5" mb="10">
      <Slider>
        {continents.map((continent) => {
          return <SliderContent key={continent.id} continent={continent} />;
        })}
      </Slider>
    </Flex>
  );
}
