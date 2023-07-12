import { Flex } from "@chakra-ui/react";
import Image from "next/image";

export function Header() {
  return (
    <Flex py="7" flexDir="row" alignItems="center" justifyContent="center">
      <Image src="/logo.png" alt="logo do worldtrip" height={160} width={160} />
    </Flex>
  );
}
