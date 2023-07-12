import { Box, Image, Text } from "@chakra-ui/react";

interface TravelTypeItemProps {
  text: string;
  imgUrl: string;
}

export function TravelTypeItem({ imgUrl, text }: TravelTypeItemProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDir="column"
      w="9.87rem"
      h="9rem"
    >
      <Box p="2">
        <Image alt={`icone de ${text}`} src={imgUrl} />
      </Box>
      <Text fontWeight="semibold" fontSize="1.rem">
        {text}
      </Text>
    </Box>
  );
}
