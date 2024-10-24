import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export default function Home1Page() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Flex bg="gray.100" w="100%" flexDirection="column" alignItems="start">
        <Box alignSelf="stretch">
          <Header />
        </Box>
        <Sidebar1 />
      </Flex>
    </>
  );
}
