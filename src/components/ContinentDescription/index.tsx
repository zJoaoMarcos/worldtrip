import { Box, Flex, HStack, Text } from "@chakra-ui/react";

interface ContinentDescriptionProps {
  description: string;
}

export function ContinentDescription({
  description,
}: ContinentDescriptionProps) {
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
      gap={{ base: "1rem", md: "20" }}
      w="100%"
      px={{ base: "1rem", md: "8.75rem" }}
      maxW="1440px"
      my={{ base: "1.5rem", md: "5rem" }}
    >
      <Box maxW="37.5rem">
        <Text textAlign="justify" fontSize="0.875rem">
          {description}
        </Text>
      </Box>

      <HStack
        w={{ base: "full", md: "30.625rem" }}
        spacing="2.625rem"
        mr={{ base: "0", md: "10" }}
      >
        <Highlight amount={50} data="países" />
        <Highlight amount={60} data="linguas" />
        <Highlight amount={27} data="cidades +100" />
      </HStack>
    </Flex>
  );
}

interface HighlightProps {
  amount: number;
  data: string;
}

function Highlight({ amount, data }: HighlightProps) {
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems={{ base: "start", md: "center" }}
    >
      <Text
        fontSize={{ base: "1.5rem", md: "5xl" }}
        color="yellow.500"
        fontWeight="semibold"
      >
        {amount}
      </Text>
      <Text
        fontSize={{ base: "1rem", md: "2xl" }}
        color="gray.700"
        fontWeight={{ base: "normal", md: "semibold" }}
      >
        {data}
      </Text>
    </Box>
  );
}
