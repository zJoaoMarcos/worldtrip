import { HStack } from "@chakra-ui/react";
import { TravelTypeItem } from "./TravelTypeItem";

export function TravelTypesSection() {
  return (
    <HStack
      w="100%"
      maxW="1440px"
      px="8.75rem"
      align="center"
      justifyContent="space-between"
      mt="7.1rem"
    >
      <TravelTypeItem imageUrl="/cocktail.png" text="vida noturna" />
      <TravelTypeItem imageUrl="/surf.png" text="praia" />
      <TravelTypeItem imageUrl="/building.png" text="moderno" />
      <TravelTypeItem imageUrl="/museum.png" text="clássico" />
      <TravelTypeItem imageUrl="/earth.png" text="e mais..." />
    </HStack>
  );
}
