import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface SliderContentProps {
  continent: {
    id: string;
    slide: string;
    altSlide: string;
    name: string;
    description: string;
  };
}

export function SliderContent({ continent }: SliderContentProps) {
  const { push } = useRouter();

  return (
    <Flex
      backgroundImage={`url(${continent.slide})`}
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
        onClick={() => {
          push(`/continent/${continent.id}`);
        }}
        fontWeight="bold"
        fontSize={{ base: "1.5rem", md: "3rem" }}
        _hover={{ color: "yellow.500", cursor: "pointer" }}
        textDecoration="none"
        textDecorationLine="none"
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
