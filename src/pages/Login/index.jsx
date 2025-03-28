import { Helmet } from "react-helmet";
import {
  Button,
  Checkbox,
  Image,
  InputLeftElement,
  InputGroup,
  Input,
  Flex,
  Box,
  Text,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import api from "../../services/api"; // Certifique-se de importar o Axios corretamente
import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [userLogin, setUserLogin] = useState(""); // Estado para o login
  const [userPassword, setUserPassword] = useState(""); // Estado para a senha
  const [error, setError] = useState(null); // Estado para gerenciar erros de autenticação
  const [isLoading, setIsLoading] = useState(false); // Estado para o botão de carregamento
  const navigate = useNavigate();

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleLogin = async () => {
    if (!userLogin || !userPassword) {
      setError("Preencha todos os campos.");
      return;
    }

    setIsLoading(true);

    try {
      // Faz a requisição de login
      const response = await api.post("/login", {
        login: userLogin,
        password: userPassword,
      });

      const { token } = response.data;

      // Salva o token no localStorage
      localStorage.setItem("token", token);

      // Faz uma chamada para obter os dados do usuário
      const userResponse = await api.get("/user/my_data", {
        headers: { Authorization: `Bearer ${token}` }, // Envia o token no header
      });

      if (userResponse.data.error) {
        throw new Error("Erro ao recuperar dados do usuário.");
      }

      const { type, login } = userResponse.data.data;

      // Salva o tipo e o login do usuário no localStorage
      localStorage.setItem("userType", type);
      localStorage.setItem("login", login);

      console.log("Login bem-sucedido. Tipo do usuário:", type);

      // Redireciona com base no tipo de usuário
      if (type === "professorisf") {
        navigate("/home1");
      } else if (type === "alunoisf") {
        navigate("/home1");
      } else if (type === "cursista") {
        navigate("/home1");
      } else {
        throw new Error("Tipo de usuário não reconhecido.");
      }
    } catch (err) {
      console.error("Erro no login:", err);
      setError("Erro ao realizar login. Verifique suas credenciais.");
    } finally {
      setIsLoading(false);
    }
  };

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
          h={{ md: "350px", base: "250px" }}
          mb={{ md: "-110px", base: "-30px" }}
          zIndex={1}
        />
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          bg="white"
          p={{ md: "40px", base: "20px" }}
          borderRadius="10px"
          boxShadow="md"
          w={{ md: "400px", base: "90%" }}
          zIndex={0}
          h={{ md: "500px", base: "auto" }}
        >
          {error && <Text color="red.500">{error}</Text>}
          <InputGroup mb="20px">
            <InputLeftElement>
              <Image src="images/img_firruser.svg" alt="Fi-rr-user" h="24px" w="24px" />
            </InputLeftElement>
            <Input
              placeholder="Login"
              value={userLogin}
              onChange={(e) => setUserLogin(e.target.value)}
            />
          </InputGroup>
          <InputGroup mb="20px">
            <InputLeftElement>
              <Image src="images/img_firrlock.svg" alt="Fi-rr-lock" h="24px" w="24px" />
            </InputLeftElement>
            <Input
              placeholder="Senha"
              type={showPassword ? "text" : "password"}
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" variant="ghost" onClick={handlePasswordVisibility}>
                <Image
                  src={showPassword ? "images/eye_open.svg" : "images/eye_close.svg"}
                  alt={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  h="24px"
                  w="24px"
                />
              </Button>
            </InputRightElement>
          </InputGroup>
          <Checkbox mb="20px">Lembrar login</Checkbox>
          <Button
            colorScheme="blue"
            w="100%"
            mb="20px"
            onClick={handleLogin}
            isLoading={isLoading}
          >
            Entrar
          </Button>
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
