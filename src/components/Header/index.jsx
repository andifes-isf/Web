import { Button, Image, Flex } from "@chakra-ui/react";
import React from "react";

export default function Header({ ...props }) {
  return (
    <Flex
      {...props}
      borderColor="black.900"
      borderBottomWidth="1px"
      borderStyle="solid"
      bg="white.a700"
      alignItems="center"
      px="6px"
      py="10px"
      as="header"
    >
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="space-between" // Garantir que o conteúdo fique entre os extremos
        px="0"
      >
        <Flex alignItems="center" justifyContent="flex-start"> {/* Garantir alinhamento à esquerda */}
          <Image
            src="images/img_header_logo.png"
            alt="Headerlogo"
            h="60px"
            zIndex={1}
            position="relative"
            w="64px"
            fit="contain"
            borderRadius="30px"
          />
          <Image
            src="images/img_logo_andifes_vetor.png"
            alt="Logoandifes"
            h="56px"
            ml="-16px"
            position="relative"
            w="62%"
            fit="contain"
          />
        </Flex>
        <Button
          color="white"
          fontFamily="Noto Sans"
          bg="#333333"
          flexDirection="row"
          h="46px"
          minW="112px"
          px={{ base: "20px", sm: "34px" }}
          borderRadius="10px"
          _hover={{ bg: "#000000" }}
        >
          Perfil
        </Button>
      </Flex>
    </Flex>
  );
}
