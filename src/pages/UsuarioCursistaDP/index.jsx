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
  const [proeficiencies, setProeficiencies] = useState([]); // Dados de proficiência linguística
  const [institutionData, setInstitutionData] = useState(null); // Dados da instituição atual

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");

        // Busca dados gerais do usuário
        const userResponse = await api.get("/user/my_data", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Busca proficiências linguísticas
        const proefResponse = await api.get(
          "/aluno_isf/visualizar_minha_proeficiencia",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Busca instituição atual
        const institutionResponse = await api.get(
          "/aluno_deinstituicao/visualizar_instituicao_atual",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUserData(userResponse.data.data); // Armazena os dados do usuário
        setProeficiencies(proefResponse.data.proeficiencies); // Armazena as proficiências

        if (!institutionResponse.data.error) {
          const institutionId =
            institutionResponse.data.registration.idInstituicao;

          // Busca detalhes da instituição
          const institutionDetailsResponse = await api.get(
            `/instituicao_ensino/${institutionId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          const institutionData = institutionDetailsResponse.data.instituicao;

          setInstitutionData({
            nome: institutionData.nome, // Nome da instituição
            comprovante: institutionResponse.data.registration.comprovante, // Comprovante de matrícula
          });
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleEditClick = () => {
    navigate("/usuario-cursista-edicao", {
      state: {
        userData,
        proeficiencies,
        institutionData,
      },
    });
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
                        {proeficiencies.length > 0 ? (
                          proeficiencies.map((proef, index) => (
                            <Box
                              key={index}
                              mt="4"
                              borderWidth="1px"
                              borderRadius="md"
                              p="4"
                              boxShadow="sm"
                            >
                              <Text fontWeight="bold">Idioma</Text>
                              <Input value={proef.idioma} isReadOnly />

                              <Text fontWeight="bold" mt="2">
                                Nível
                              </Text>
                              <Input value={proef.nivel} isReadOnly />

                              <Text fontWeight="bold" mt="2">
                                Comprovante
                              </Text>
                              <Button
                                leftIcon={<DownloadIcon />}
                                colorScheme="gray"
                                variant="outline"
                                onClick={() => alert(proef.comprovante)} // Substitua com a lógica para abrir/baixar o comprovante
                              >
                                Ver Comprovante
                              </Button>
                            </Box>
                          ))
                        ) : (
                          <Text mt="4">Nenhuma proficiência cadastrada.</Text>
                        )}
                      </Box>

                      {/* Coluna 3: Instituição */}
                      <Box flex="1">
                        <Heading size="xs">Instituição</Heading>

                        <Box mt="2">
                          <Text fontWeight="bold">Nome da Instituição</Text>
                          <Input
                            placeholder="Nome da Instituição"
                            value={
                              institutionData?.nome ||
                              "Nenhuma instituição vinculada"
                            }
                            isReadOnly
                          />
                        </Box>

                        <Box mt="2">
                          <Text fontWeight="bold">
                            Comprovante de Matrícula
                          </Text>
                          {institutionData?.comprovante ? (
                            <Button
                              leftIcon={<DownloadIcon />}
                              colorScheme="gray"
                              variant="outline"
                              onClick={() =>
                                alert(institutionData?.comprovante)
                              } // Altere para a lógica de exibição ou download do comprovante
                            >
                              Ver Comprovante
                            </Button>
                          ) : (
                            <Text>Comprovante não disponível.</Text>
                          )}
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
