import React from "react";
import { ChakraProvider, CSSReset, Box, extendTheme } from "@chakra-ui/react";
import DashBoard from "./components/dashboard";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";

const theme = extendTheme(/* your theme configuration */);

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Header />

      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
  
    </ChakraProvider>
  );
};

export default App;
