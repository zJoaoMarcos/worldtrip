import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Image,
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
      <CardHeader
        bgImage={`url(${city.imageUrl})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        w="full"
        h="173px"
        bgSize="contain"
      />

      <CardBody
        flexDir="row"
        border="1px"
        borderTop="none"
        borderColor="yellow.200"
        borderBottomRadius="md"
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
          />
        </Flex>
      </CardBody>
    </Card>
  );
}
