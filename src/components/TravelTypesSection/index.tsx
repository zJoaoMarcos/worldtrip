import { HStack } from "@chakra-ui/react";
import { TravelTypeItem } from "./TravelTypeItem";

export function TravelTypesSection() {
  return (
    <HStack
      w="100%"
      align="center"
      justifyContent="space-evenly"
      mt="7.1rem"
      px="8.75rem"
    >
      <TravelTypeItem imageUrl="/cocktail.png" text="vida noturna" />
      <TravelTypeItem imageUrl="/surf.png" text="praia" />
      <TravelTypeItem imageUrl="/building.png" text="moderno" />
      <TravelTypeItem imageUrl="/museum.png" text="clássico" />
      <TravelTypeItem imageUrl="/earth.png" text="e mais..." />
    </HStack>
  );
}
