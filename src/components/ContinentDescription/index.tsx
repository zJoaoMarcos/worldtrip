import { Box, Flex, HStack, Text } from "@chakra-ui/react";

interface ContinentDescriptionProps {
  description: string;
}

export function ContinentDescription({
  description,
}: ContinentDescriptionProps) {
  return (
    <Flex
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      gap="20"
      w="100%"
      maxW="1440px"
      my="5rem"
    >
      <Text maxW="37.5rem" textAlign="justify" fontSize="2xl">
        {description}
      </Text>

      <HStack w="490px" spacing="2.625rem" mr="10">
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
    <Box display="flex" flexDir="column" alignItems="center">
      <Text fontSize="5xl" color="yellow.500" fontWeight="semibold">
        {amount}
      </Text>
      <Text fontSize="2xl" color="gray.700" fontWeight="semibold">
        {data}
      </Text>
    </Box>
  );
}
