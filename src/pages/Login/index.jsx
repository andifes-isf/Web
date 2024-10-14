import { Helmet } from "react-helmet";
import { Button, Checkbox, Image, InputLeftElement, InputGroup, Input, Flex, Box, Text } from "@chakra-ui/react";
import React from "react";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Box
        h={{ md: "100vh", base: "auto" }}
        bg="gray.100"
        w="100%"
        position="relative"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        px={{ md: "20px", base: "20px" }}
      >
        <Image
          src="images/img_logo_idioma_sem.png"
          alt="Logoidiomasem"
          h={{ md: "300px", base: "250px" }}
          mb={{ md: "-50px", base: "-30px" }}
          zIndex={1}
        />
        <Flex
          direction="column"
          alignItems="center"
          bg="white"
          p={{ md: "40px", base: "20px" }}
          borderRadius="10px"
          boxShadow="md"
          w={{ md: "400px", base: "90%" }}
          zIndex={0}
        >
          <InputGroup mb="20px">
            <InputLeftElement>
              <Image src="images/img_firruser.svg" alt="Fi-rr-user" h="24px" w="24px" />
            </InputLeftElement>
            <Input placeholder="Login" />
          </InputGroup>
          <InputGroup mb="20px">
            <InputLeftElement>
              <Image src="images/img_firrlock.svg" alt="Fi-rr-lock" h="24px" w="24px" />
            </InputLeftElement>
            <Input placeholder="Senha" type="password" />
          </InputGroup>
          <Checkbox mb="20px">Lembrar login</Checkbox>
          <Button colorScheme="blue" w="100%" mb="20px">Entrar</Button>
          <Text textDecoration="underline">Esqueci minha senha</Text>
        </Flex>
        <Image
          src="images/img_logo_andifes_vetor.png"
          alt="Logoandifes"
          h={{ md: "100px", base: "80px" }}
          mt={{ md: "40px", base: "20px" }}
        />
      </Box>
    </>
  );
}
