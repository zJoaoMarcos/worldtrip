import { Flex } from "@chakra-ui/react";
import { TravelTypeItem } from "./TravelTypeItem";

export function TravelTypesSection() {
  return (
    <Flex
      w="100%"
      maxW="1440px"
      px={{ base: "3.125rem", md: "8.75rem" }}
      flexDir="row"
      alignItems="center"
      maxH="9.0625rem"
      gap={{ base: "3rem", md: "0" }}
      justifyContent="space-around"
      wrap={{ base: "wrap", md: "nowrap" }}
      mt={{ base: "2.25rem", md: "7.1rem" }}
    >
      <TravelTypeItem imageUrl="/cocktail.png" text="vida noturna" />
      <TravelTypeItem imageUrl="/surf.png" text="praia" />
      <TravelTypeItem imageUrl="/building.png" text="moderno" />
      <TravelTypeItem imageUrl="/museum.png" text="clássico" />
      <TravelTypeItem imageUrl="/earth.png" text="e mais..." />
    </Flex>
  );
}
