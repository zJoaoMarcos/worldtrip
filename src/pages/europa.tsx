import Head from "next/head";

import { CitiesPlusHundred } from "@/components/CitiesPlusHundred";
import { ContinentBanner } from "@/components/ContinentBanner";
import { ContinentDescription } from "@/components/ContinentDescription";
import { Header } from "@/components/Header";
import { europe } from "@/utils/europe";
import { Flex } from "@chakra-ui/react";

export default function Continent() {
  const { name, description, bannerUrl, cities } = europe;

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>

      <Flex w="100%" flexDir="column" alignItems="center">
        <Header />

        <ContinentBanner bannerUrl={bannerUrl} name={name} />

        <ContinentDescription description={description} />

        <CitiesPlusHundred cities={cities} />
      </Flex>
    </>
  );
}
