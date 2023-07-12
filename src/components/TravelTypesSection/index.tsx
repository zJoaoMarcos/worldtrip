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
      <TravelTypeItem imgUrl="/cocktail.png" text="vida noturna" />
      <TravelTypeItem imgUrl="/surf.png" text="praia" />
      <TravelTypeItem imgUrl="/building.png" text="moderno" />
      <TravelTypeItem imgUrl="/museum.png" text="clássico" />
      <TravelTypeItem imgUrl="/earth.png" text="e mais..." />
    </HStack>
  );
}
