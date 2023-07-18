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
      h={{ base: "15.625rem", md: "28.75rem" }}
      flexDir="column"
      align="center"
      justify="center"
      textAlign="center"
    >
      <Text
        color="gray.50"
        fontWeight="bold"
        fontSize={{ base: "1.5rem", md: "3rem" }}
      >
        {continent.name}
      </Text>

      <Text
        mt="4"
        color="gray.50"
        fontWeight="semibold"
        fontSize={{ base: "0.875rem", md: "1.5rem" }}
      >
        {continent.description}
      </Text>
    </Flex>
  );
}
