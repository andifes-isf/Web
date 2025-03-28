import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  Select,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { FaCamera } from "react-icons/fa";
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";
import api from "../../services/api";

const UsuarioCursistaEdicao = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userData: initialUserData } = location.state || {};

  const [userData, setUserData] = useState(initialUserData || {});

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");

      // Atualizar os dados do usuário usando a rota correta
      const response = await api.put(
        `/user/update_my_data`,
        {
          name: userData.name,
          surname: userData.surname,
          DDI: userData.DDI,
          DDD: userData.DDD,
          phone: userData.phone,
          ethnicity: userData.ethnicity,
          gender: userData.gender,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.error) {
        alert("Erro ao salvar os dados: " + response.data.message);
        return;
      }

      alert("Dados atualizados com sucesso!");
      navigate("/usuario-cursista");
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
      alert("Erro ao salvar os dados. Tente novamente.");
    }
  };

  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex flex="1">
        <Sidebar1 />
        <Box flex="1" p="8">
          <Box bg="white" p="6" borderRadius="md" boxShadow="md">
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
              <Button leftIcon={<EditIcon />} colorScheme="blue" onClick={handleSave}>
                Salvar
              </Button>
            </Flex>

            <Tabs variant="enclosed">
              <TabList>
                <Tab>Dados</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <VStack spacing="4">
                    <Flex width="100%" justify="space-between">
                      <Box flex="1" mr="4">
                        <Heading size="xs">Dados Pessoais</Heading>
                        <Box mt="2">
                          <Text fontWeight="bold">Nome</Text>
                          <Input
                            placeholder="Nome"
                            value={userData.name || ""}
                            onChange={(e) =>
                              setUserData({ ...userData, name: e.target.value })
                            }
                          />
                        </Box>
                        <Box mt="2">
                          <Text fontWeight="bold">Sobrenome</Text>
                          <Input
                            placeholder="Sobrenome"
                            value={userData.surname || ""}
                            onChange={(e) =>
                              setUserData({ ...userData, surname: e.target.value })
                            }
                          />
                        </Box>
                        <Flex mt="2" gap="4">
                          <Box flex="0.2">
                            <Text fontWeight="bold">DDD</Text>
                            <Input
                              placeholder="DDD"
                              value={userData.DDD || ""}
                              onChange={(e) => {
                                const newValue = e.target.value.replace(/\D/g, "").slice(0, 2);
                                setUserData({ ...userData, DDD: newValue });
                              }}
                            />
                          </Box>
                          <Box flex="1">
                            <Text fontWeight="bold">Telefone</Text>
                            <Input
                              placeholder="Telefone"
                              value={userData.phone || ""}
                              onChange={(e) => {
                                const newValue = e.target.value.replace(/\D/g, "").slice(0, 9);
                                setUserData({ ...userData, phone: newValue });
                              }}
                            />
                          </Box>
                        </Flex>
                        <Box mt="2">
                          <Text fontWeight="bold">Etnia</Text>
                          <Select
                            value={userData.ethnicity || ""}
                            onChange={(e) =>
                              setUserData({ ...userData, ethnicity: e.target.value })
                            }
                          >
                            <option value="amarelo">Amarelo</option>
                            <option value="branco">Branco</option>
                            <option value="indigena">Indígena</option>
                            <option value="pardo">Pardo</option>
                            <option value="preto">Preto</option>
                            <option value="quilombola">Quilombola</option>
                          </Select>
                        </Box>
                        <Box mt="2">
                          <Text fontWeight="bold">Gênero</Text>
                          <Select
                            value={userData.gender || ""}
                            onChange={(e) =>
                              setUserData({ ...userData, gender: e.target.value })
                            }
                          >
                            <option value="feminino">Feminino</option>
                            <option value="masculino">Masculino</option>
                            <option value="nao-binario">Não-binário</option>
                            <option value="outro">Outro</option>
                          </Select>
                        </Box>
                      </Box>
                    </Flex>
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

export default UsuarioCursistaEdicao;
