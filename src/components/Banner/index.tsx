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
  const showAirplane = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex
      backgroundImage="url('/background-banner.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h={{ base: "10rem", md: "20.9rem" }}
      justifyContent="center"
    >
      <Flex
        w="100%"
        maxW="1440px"
        px={{ base: "1rem", md: "8.75rem" }}
        py={{ base: "1.75rem", md: "5rem" }}
        alignItems="center"
        justify="space-between"
      >
        <VStack
          flexDir="column"
          align="start"
          maxW="32.75rem"
          spacing={{ basw: "8px", md: "5" }}
        >
          <Heading
            as="h2"
            color="gray.50"
            fontSize={{ base: "1.25rem", md: "2.25rem" }}
            fontWeight="semibold"
            w="22.rem"
            lineHeight="normal"
          >
            5 Continentes, infinitas possibilidades.
          </Heading>

          <Text
            color="gray.100"
            fontSize={{ base: "0.875rem", md: "1.25rem" }}
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
