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
    <Flex w="100%" maxW="1440px" mb="20" flexDir="column">
      <Heading as="h4" color="gray.700" fontWeight="normal">
        Cidades +100
      </Heading>

      <SimpleGrid
        w="full"
        columns={4}
        spacingY="3rem"
        spacingX="2.8125rem"
        mt="2.5rem"
      >
        {cities.map((city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
