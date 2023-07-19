import Head from "next/head";

import { CitiesPlusHundred } from "@/components/CitiesPlusHundred";
import { ContinentBanner } from "@/components/ContinentBanner";
import { ContinentDescription } from "@/components/ContinentDescription";
import { Header } from "@/components/Header";
import { api } from "@/services/axios/api";
import { Flex } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface Continent {
  name: string;
  paragraph: string;
  bannerUrl: string;
  countries: number;
  languages: number;
  cities: {
    id: number;
    name: string;
    country: string;
    imageUrl: string;
    flag: string;
  }[];
}

interface ContinentProps {
  continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
  const citiesPlusHundred = continent.cities.length;

  return (
    <>
      <Head>
        <title>{continent?.name!}</title>
      </Head>

      <Flex w="100%" flexDir="column" alignItems="center">
        <Header />

        <ContinentBanner
          bannerUrl={continent.bannerUrl}
          name={continent.name}
        />

        <ContinentDescription
          paragraph={continent.paragraph}
          countries={continent.countries}
          languages={continent.languages}
          citiesPlusHundred={citiesPlusHundred}
        />

        <CitiesPlusHundred cities={continent.cities} />
      </Flex>
    </>
  );
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.params as IParams;

  const { data } = await api.get<Continent>(`/continents/${slug}`);

  const continent = {
    name: data.name,
    bannerUrl: data.bannerUrl,
    paragraph: data.paragraph,
    countries: data.countries,
    languages: data.languages,

    cities: data.cities.map((city) => {
      return {
        id: city.id,
        imageUrl: city.imageUrl,
        name: city.name,
        country: city.country,
        flag: city.flag,
      };
    }),
  };

  return {
    props: { continent },
  };
};
