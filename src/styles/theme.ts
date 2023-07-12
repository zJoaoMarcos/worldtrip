import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      50: "#F5F8FA",
      100: "#DADADA",
      400: "#999999",
      700: "#47585B",
    },
    yellow: {
      500: "#FFBA08",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.700",
      },
    },
  },
  fonts: {
    head: "Poppins",
    body: "Poppins",
  },
});
