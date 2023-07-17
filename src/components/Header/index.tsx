import { Flex, IconButton, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { RiArrowLeftSLine } from "react-icons/ri";

export function Header() {
  const { asPath, push } = useRouter();
  const isHomePage = asPath !== "/";

  return (
    <Flex w="100%" maxW="1440px" py="7" flexDir="row" alignItems="center">
      {isHomePage && (
        <IconButton
          aria-label="back-home"
          size="lg"
          bg="transparent"
          _hover={{ bg: "transparent", color: "yellow.500" }}
          icon={<RiArrowLeftSLine size={40} />}
          onClick={() => {
            push("/");
          }}
        />
      )}

      <Image src="/logo.png" alt="logo do worldtrip" w="11.5rem" mx="auto" />
    </Flex>
  );
}
