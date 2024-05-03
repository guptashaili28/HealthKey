import React from "react";
import {
  Box,
  Stack,
  Text,
  Link,
  Flex,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      p={{ base: 3, md: 5 }}
      maxW="100vw"
      marginInline="auto"
      mt={"5"}
      bg={
        "linear-gradient(270deg, #011228 -21.91%, rgba(1, 18, 40, 0.83) 100.84%, rgba(1, 18, 40, 0.77) 101.34%, rgba(1, 18, 40, 0.77) 102.73%, rgba(1, 18, 40, 0.00) 105.07%, rgba(1, 18, 40, 0.79) 105.07%)"
      }
    >
      <Flex
        align={"center"}
        justify={"space-between"}
        w={"80vw"}
        m={"auto"}
        direction={{ base: "column", md: "row" }}
      >
        <Stack
          spacing={{ base: 8, md: 0 }}
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
        >
          <Text
            fontSize={"2xl"}
            fontWeight={"semibold"}
            fontFamily={"Raleway"}
            color={"white"}
          >
            HealthKey
          </Text>
        </Stack>
        <Text
          mt={2}
          fontSize="md"
          fontWeight={"500"}
          color={"white"}
        >
          "Health Metrics made simple and accessible"
        </Text>
      </Flex>
      <Text
        mt={"3"}
        color={"white"}
        fontSize={"md"}
        fontFamily={"Raleway"}
        fontWeight={"400"}
        textAlign={"center"}
      >
        © 2024 HealthKey All Right Reserved
      </Text>
    </Box>
  );
};

export default Footer;
