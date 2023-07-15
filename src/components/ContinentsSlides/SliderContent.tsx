import { Flex, Text } from "@chakra-ui/react";

interface SliderContentProps {
  continent: {
    id: number;
    image: string;
    altImage: string;
    name: string;
    description: string;
  };
}

export function SliderContent({ continent }: SliderContentProps) {
  return (
    <Flex
      backgroundImage={`url(${continent.image})`}
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
        {continent.description}
      </Text>
    </Flex>
  );
}
