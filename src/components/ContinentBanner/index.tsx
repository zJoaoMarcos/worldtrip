import { Flex, Heading } from "@chakra-ui/react";

interface ContinentBannerProps {
  bannerUrl: string;
  name: string;
}

export function ContinentBanner({ bannerUrl, name }: ContinentBannerProps) {
  return (
    <Flex
      backgroundImage={`url(${bannerUrl})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h={{ base: "9.375rem", md: "31.25rem" }}
      alignItems="end"
      justifyContent="center"
    >
      <Flex
        w="100%"
        maxWidth="1440px"
        alignItems={{ base: "center", md: "end" }}
        justifyContent={{ base: "center", md: "flex-start" }}
        pb="3.75rem"
        pl={{ base: 0, md: "8.75rem" }}
      >
        <Heading maxW="1440px" color="gray.50" fontWeight="semibold">
          {name}
        </Heading>
      </Flex>
    </Flex>
  );
}
