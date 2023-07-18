import { Flex, IconButton, Image, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { RiArrowLeftSLine } from "react-icons/ri";

export function Header() {
  const { asPath, push } = useRouter();
  const isWideScreenVersion = useBreakpointValue({ base: 30, md: 40 });
  const isHomePage = asPath !== "/";

  return (
    <Flex
      w="100%"
      maxW="1440px"
      px={{ base: "1rem", md: "8.75rem" }}
      py="7"
      flexDir="row"
      alignItems="center"
    >
      {isHomePage && (
        <IconButton
          aria-label="back-home"
          size={{ base: "xs", sm: "lg" }}
          bg="transparent"
          _hover={{ bg: "transparent", color: "yellow.500" }}
          icon={<RiArrowLeftSLine size={isWideScreenVersion} />}
          onClick={() => {
            push("/");
          }}
        />
      )}

      <Image
        src="/logo.png"
        alt="logo do worldtrip"
        w={{ base: "5rem", md: "11.5rem" }}
        mx="auto"
      />
    </Flex>
  );
}
