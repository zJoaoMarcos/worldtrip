import { Flex, Text } from "@chakra-ui/react";

import { continents } from "@/utils/continents";
import { SwiperSlide } from "swiper/react";
import { Slider } from "./Slider";

export function ContinentsSlides() {
  return (
    <Flex w="100%" maxW="1240px" mx="auto" px="20" h="28.125rem" my="5" mb="10">
      <Slider>
        {continents.map((continent) => {
          return (
            <SwiperSlide key={continent.id}>
              <Flex
                backgroundImage={`url(${continent.banner})`}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                bgSize="cover"
                w="100%"
                h="28.75rem"
                flexDir="column"
                align="center"
                justify="center"
                textAlign="center"
              >
                <Text color="gray.50" fontWeight="bold" fontSize="4xl">
                  {continent.name}
                </Text>

                <Text
                  mt="4"
                  color="gray.50"
                  fontWeight="semibold"
                  fontSize="xl"
                >
                  description do continent
                </Text>
              </Flex>
            </SwiperSlide>
          );
        })}
      </Slider>
    </Flex>
  );
}
