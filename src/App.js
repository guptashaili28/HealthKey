import React from "react";
import { ChakraProvider, CSSReset, Box, extendTheme } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";

const theme = extendTheme(/* your theme configuration */);

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Header />

      <Routes>
        
      </Routes>
  
    </ChakraProvider>
  );
};

export default App;
