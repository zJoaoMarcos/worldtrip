import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { CityCard } from "./CityCard";

interface CitiesPlusHundredProps {
  cities: Array<{
    id: number;
    name: string;
    country: string;
    imageUrl: string;
    flag: string;
  }>;
}

export function CitiesPlusHundred({ cities }: CitiesPlusHundredProps) {
  return (
    <Flex
      w="100%"
      maxW="1440px"
      px={{ base: "1rem", md: "8.75rem" }}
      mb="20"
      flexDir="column"
      alignItems="flex-start"
    >
      <Heading as="h4" textAlign="start" color="gray.700" fontWeight="normal">
        Cidades +100
      </Heading>

      <SimpleGrid
        w="100%"
        columns={{ base: 1, sm: 2, lg: 4 }}
        px={{ base: "3.75rem", sm: "0" }}
        spacingY={{ base: "1.25rem", md: "3rem" }}
        spacingX={{ base: "0", md: "2.8125rem" }}
        mt={{ base: "1.25rem", md: "2.5rem" }}
      >
        {cities.map((city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
