import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export function Banner() {
  const showAirplane = useBreakpointValue({ base: false, md: true });

  return (
    <Flex
      backgroundImage="url('/background-banner.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h="20.9rem"
      justifyContent="center"
    >
      <Flex
        w="100%"
        maxW="1440px"
        h="full"
        px="8.75rem"
        py="5rem"
        alignItems="center"
        justify="space-between"
      >
        <VStack flexDir="column" align="start" maxW="32.75rem" spacing="5">
          <Heading
            as="h2"
            color="gray.50"
            fontSize="36px"
            fontWeight="semibold"
            w="22.rem"
            lineHeight="normal"
          >
            5 Continentes, infinitas possibilidades.
          </Heading>

          <Text
            color="gray.100"
            fontSize="20px"
            fontWeight="normal"
            w={{ base: "10.rem", sm: "18.rem" }}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </VStack>

        {showAirplane && (
          <Box mt="28">
            <Image
              src="/airplane.png"
              alt="airplane draw"
              style={{ transform: "rotate(3deg)" }}
            />
          </Box>
        )}
      </Flex>
    </Flex>
  );
}
