import { Flex, Text } from "@chakra-ui/react";
import { SwiperSlide } from "swiper/react";

interface SliderContentProps {
  continent: {
    id: number;
    banner: string;
    name: string;
  };
}

export function SliderContent({ continent }: SliderContentProps) {
  return (
    <SwiperSlide>
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

        <Text mt="4" color="gray.50" fontWeight="semibold" fontSize="xl">
          description do continent
        </Text>
      </Flex>
    </SwiperSlide>
  );
}
