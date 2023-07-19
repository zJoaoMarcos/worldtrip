import {
  Card,
  CardBody,
  Flex,
  Image,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";

interface CityCardProps {
  city: {
    imageUrl: string;
    name: string;
    country: string;
    flag: string;
  };
}

export function CityCard({ city }: CityCardProps) {
  return (
    <Card w="256px" h="279px" display="flex" flexDir="column">
      <Image
        w="full"
        h="10.625rem"
        alt={`imagem da cidade ${city.name}`}
        src={city.imageUrl}
        objectFit="fill"
        objectPosition="center"
        borderTopRadius="md"
        fallback={<Spinner mx="auto" my="2rem" mb="7rem" />}
      />

      <CardBody
        flexDir="row"
        border="1px"
        borderTop="none"
        borderColor="yellow.200"
      >
        <Flex
          w="full"
          alignItems="center"
          justifyContent="space-between"
          flexDir="row"
        >
          <VStack alignItems="start">
            <Text fontSize="lg" fontWeight="semibold" color="gray.700">
              {city.name}
            </Text>
            <Text fontSize="sm" color="gray.400">
              {city.country}
            </Text>
          </VStack>

          <Image
            alt={`bandeira do(a) ${city.country}`}
            objectFit="cover"
            boxSize="30px"
            src={city.flag}
            rounded="full"
            shadow="md"
          />
        </Flex>
      </CardBody>
    </Card>
  );
}
