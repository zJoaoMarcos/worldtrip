import { Box, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypeItemProps {
  text: string;
  imageUrl: string;
}

export function TravelTypeItem({ imageUrl, text }: TravelTypeItemProps) {
  const isWideVersion = useBreakpointValue({ base: false, md: true });

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDir={{ base: "row", md: "column" }}
      w={{ base: "max-content", md: "9.87rem" }}
      h={{ base: 0, md: "9rem" }}
    >
      <Box p="2">
        {isWideVersion ? (
          <Image alt={`icone de ${text}`} src={imageUrl} />
        ) : (
          <Box boxSize="0.5rem" bgColor="yellow.500" />
        )}
      </Box>
      <Text fontWeight="semibold" fontSize="1.rem">
        {text}
      </Text>
    </Box>
  );
}
