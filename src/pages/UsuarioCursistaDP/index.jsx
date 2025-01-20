import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Button,
  Input,
  Avatar,
  IconButton,
  VStack,
  HStack,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Text,
} from "@chakra-ui/react";
import { DownloadIcon, EditIcon } from "@chakra-ui/icons";
import { FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";
import api from "../../services/api";

const UsuarioCursistaDP = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null); // Dados do usuário

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token"); // Obtenha o token salvo no localStorage após o login
        const response = await api.get("/user/my_data", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.data); // Verifica os dados retornados
        setUserData(response.data.data); // Ajuste para acessar os dados encapsulados na propriedade `data`
      } catch (error) {
        console.error("Erro ao buscar os dados do usuário:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleEditClick = () => {
    navigate("/usuario-cursista-edicao");
  };

  if (!userData) {
    return <Text>Carregando...</Text>; // Mostra um texto enquanto os dados estão carregando
  }

  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex flex="1">
        <Sidebar1 />
        <Box flex="1" p="8">
          <Box bg="white" p="6" borderRadius="md" boxShadow="md">
            {/* Header do perfil */}
            <Flex justify="space-between" align="center" mb="6">
              <HStack spacing="4">
                <Avatar
                  size="xl"
                  name={`${userData.name} ${userData.surname}`}
                  src="profile-placeholder.png"
                />
                <IconButton
                  aria-label="Trocar Foto"
                  icon={<FaCamera />}
                  variant="outline"
                  borderRadius="full"
                  size="sm"
                />
                <VStack align="start" spacing="0" ml="4">
                  <Heading size="md">{`${userData.name} ${userData.surname}`}</Heading>
                  <Box>{`${userData.email}@${userData.email_domain}`}</Box>
                </VStack>
              </HStack>
              <Button
                leftIcon={<EditIcon />}
                colorScheme="gray"
                onClick={handleEditClick}
              >
                Editar
              </Button>
            </Flex>

            {/* Tabs para Dados, Componentes Curriculares e Horas */}
            <Tabs variant="enclosed">
              <TabList>
                <Tab>Dados</Tab>
                <Tab>Componentes Curriculares</Tab>
                <Tab>Horas</Tab>
              </TabList>

              <TabPanels>
                {/* Aba Dados */}
                <TabPanel>
                  <VStack spacing="4">
                    <Flex width="100%" justify="space-between">
                      {/* Coluna 1: Dados Pessoais */}
                      <Box flex="1" mr="4">
                        <Heading size="xs">Dados Pessoais</Heading>
                        <Box mt="2">
                          <Text fontWeight="bold">Nome Completo</Text>
                          <Input
                            placeholder="Nome Completo"
                            value={`${userData.name || ""} ${
                              userData.surname || ""
                            }`}
                            isReadOnly
                          />
                        </Box>
                        <Box mt="2">
                          <Text fontWeight="bold">Telefone</Text>
                          <Input
                            placeholder="Telefone"
                            value={`(${userData.DDD || ""}) ${
                              userData.phone || ""
                            }`}
                            isReadOnly
                          />
                        </Box>
                        <Box mt="2">
                          <Text fontWeight="bold">Etnia</Text>
                          <Input
                            placeholder="Etnia"
                            value={userData.ethnicity || ""}
                            isReadOnly
                          />
                        </Box>
                        <Box mt="2">
                          <Text fontWeight="bold">Gênero</Text>
                          <Input
                            placeholder="Gênero"
                            value={userData.gender || ""}
                            isReadOnly
                          />
                        </Box>
                      </Box>

                      {/* Coluna 2: Proeficiência Linguística */}
                      <Box flex="1" mr="4">
                        <Heading size="xs">Proeficiência Linguística</Heading>
                        <Box mt="2">
                          <Text fontWeight="bold">Nível</Text>
                          <Input
                            placeholder="Nível"
                            value="Avançado"
                            isReadOnly
                          />
                        </Box>
                        <Box mt="2">
                          <Text fontWeight="bold">Idioma</Text>
                          <Input
                            placeholder="Idioma"
                            value="Inglês"
                            isReadOnly
                          />
                        </Box>
                        <Box mt="2">
                          <Text fontWeight="bold">Documento Comprobatório</Text>
                          <Button
                            leftIcon={<DownloadIcon />}
                            colorScheme="gray"
                            variant="outline"
                          >
                            Certificado.pdf
                          </Button>
                        </Box>
                      </Box>

                      {/* Coluna 3: Instituição */}
                      <Box flex="1">
                        <Heading size="xs">Instituição</Heading>
                        <Box mt="2">
                          <Text fontWeight="bold">Nome da Instituição</Text>
                          <Input placeholder="Nome da Instituição" value="Universidade XYZ" isReadOnly />
                        </Box>
                        <Box mt="2">
                          <Text fontWeight="bold">Comprovante de Matrícula</Text>
                          <Button leftIcon={<DownloadIcon />} colorScheme="gray" variant="outline">
                            Comprovante.pdf
                          </Button>
                        </Box>
                      </Box>
                    </Flex>
                  </VStack>
                </TabPanel>

                {/* Aba Componentes Curriculares */}
                <TabPanel>
                  <VStack spacing="4">
                    <Flex width="100%" justify="space-between">
                      <Box flex="1" mr="4">
                        <Heading size="xs">Componentes Curriculares</Heading>
                        <Box mt="2">
                          <Text fontWeight="bold">Núcleo Comum</Text>
                          <Flex>
                            <Input
                              placeholder="Horas Atuais"
                              value="40h"
                              isReadOnly
                            />
                            <Input
                              placeholder="Total Horas"
                              value="100h"
                              isReadOnly
                              ml="2"
                            />
                          </Flex>
                        </Box>
                        <Box mt="2">
                          <Text fontWeight="bold">CCI</Text>
                          <Flex>
                            <Input
                              placeholder="Horas Atuais"
                              value="30h"
                              isReadOnly
                            />
                            <Input
                              placeholder="Total Horas"
                              value="100h"
                              isReadOnly
                              ml="2"
                            />
                          </Flex>
                        </Box>
                        <Box mt="2">
                          <Text fontWeight="bold">CCTI</Text>
                          <Flex>
                            <Input
                              placeholder="Horas Atuais"
                              value="30h"
                              isReadOnly
                            />
                            <Input
                              placeholder="Total Horas"
                              value="100h"
                              isReadOnly
                              ml="2"
                            />
                          </Flex>
                        </Box>
                        <Box mt="2">
                          <Text fontWeight="bold">CCI - P</Text>
                          <Flex>
                            <Input
                              placeholder="Horas Atuais"
                              value="30h"
                              isReadOnly
                            />
                            <Input
                              placeholder="Total Horas"
                              value="100h"
                              isReadOnly
                              ml="2"
                            />
                          </Flex>
                        </Box>
                      </Box>
                    </Flex>
                  </VStack>
                </TabPanel>

                <TabPanel>
                  {/* Seção de Horas */}
                  <VStack spacing="4" align="start">
                    {" "}
                    {/* Alinha os itens à esquerda */}
                    <Box>
                      <Heading size="xs" mb="2">
                        Horas Práticas
                      </Heading>
                      <Input
                        placeholder="Horas Práticas"
                        value="40h"
                        isReadOnly
                      />
                    </Box>
                    <Box>
                      <Heading size="xs" mb="2">
                        Horas Teóricas
                      </Heading>
                      <Input
                        placeholder="Horas Teóricas"
                        value="60h"
                        isReadOnly
                      />
                    </Box>
                    <Box>
                      <Heading size="xs" mb="2">
                        Horas Orientação
                      </Heading>
                      <Input
                        placeholder="Horas Orientação"
                        value="20h"
                        isReadOnly
                      />
                    </Box>
                  </VStack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default UsuarioCursistaDP;
