import { Box, Flex, Heading } from "@chakra-ui/react";

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
      h="31.25rem"
      alignItems="flex-end"
      justifyContent="center"
      pb="3.75rem"
    >
      <Box w="100%" maxW="1440px">
        <Heading color="gray.50" fontWeight="semibold">
          {name}
        </Heading>
      </Box>
    </Flex>
  );
}
