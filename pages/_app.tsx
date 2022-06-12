import "@fontsource/poppins";

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    cyan: "hsl(180, 66%, 49%)",
    darkViolet: "hsl(257, 27%, 26%)",
  },
  secondary: {
    red: "hsl(0, 87%, 67%)",
  },
  neutral: {
    gray: "hsl(0, 0%, 75%)",
    grayishViolet: "hsl(257, 27%, 63%)",
    veryDarkBlue: "hsl(255, 11%, 22%)",
    veryDarkViolet: "hsl(260, 8%, 14%)",
  },
};

const fonts = {
  heading: `Poppins, sans-serif`,
  body: `Poppins, sans-serif`,
};

const theme = extendTheme({ colors, fonts });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
