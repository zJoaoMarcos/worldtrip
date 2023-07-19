import { Box, Flex, HStack, Text, Tooltip } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

interface ContinentDescriptionProps {
  paragraph: string;
  countries: number;
  languages: number;
  citiesPlusHundred: number;
}

export function ContinentDescription({
  paragraph,
  countries,
  languages,
  citiesPlusHundred,
}: ContinentDescriptionProps) {
  return (
    <Flex
      flexDir={{ base: "column", lg: "row" }}
      alignItems="center"
      justifyContent="space-between"
      gap={{ base: "1rem", lg: "20" }}
      w="100%"
      px={{ base: "1rem", md: "8.75rem" }}
      maxW="1440px"
      my={{ base: "1.5rem", md: "5rem" }}
    >
      <Box w="full" maxW="37.5rem">
        <Text textAlign="justify" fontSize="0.875rem">
          {paragraph}
        </Text>
      </Box>

      <HStack
        w="full"
        alignItems="center"
        justifyContent="center"
        spacing="2.625rem"
        mr={{ base: "0", lg: "10" }}
      >
        <Highlight amount={countries} data="países" />
        <Highlight amount={languages} data="linguas" />
        <Highlight amount={citiesPlusHundred} data="cidades +100" hasToolTip />
      </HStack>
    </Flex>
  );
}

interface HighlightProps {
  amount: number;
  data: string;
  hasToolTip?: boolean;
}

function Highlight({ amount, data, hasToolTip = false }: HighlightProps) {
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
      <HStack>
        <Text
          fontSize={{ base: "1rem", md: "2xl" }}
          color="gray.700"
          fontWeight={{ base: "normal", md: "semibold" }}
        >
          {data}
        </Text>
        {hasToolTip && (
          <Tooltip
            hasArrow
            bgColor="gray.400"
            fontSize="sm"
            label="As cidades +100 são as cidades que aquele continente possui que estão entre as 100 cidades mais visitadas do mundo."
            aria-label="As cidades +100 são as cidades que aquele continente possui que estão entre as 100 cidades mais visitadas do mundo."
          >
            <span>
              <RiInformationLine />
            </span>
          </Tooltip>
        )}
      </HStack>
    </Box>
  );
}
