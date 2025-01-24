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
import { DownloadIcon, EditIcon } from "@chakra-ui/icons";
import { FaCamera } from "react-icons/fa";
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";
import api from "../../services/api";

const UsuarioCursistaDPEdicao = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    userData: initialUserData,
    proeficiencies,
    institutionData,
  } = location.state || {};

  // Estados locais para capturar os dados editados
  const [userData, setUserData] = useState(initialUserData || {});

  // Função para salvar os dados
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");

      // Atualizar dados do usuário
      const userResponse = await api.put(
        "/user/update_my_data",
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

      if (userResponse.data.error) {
        alert(
          "Erro ao salvar os dados do usuário: " + userResponse.data.message
        );
        return;
      }

      alert("Dados do usuário atualizados com sucesso!");

      // Redirecionar para a página de exibição após salvar
      navigate("/usuario-cursista", {
        state: { userData, proeficiencies, institutionData },
      });
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
            {/* Header do perfil */}
            <Flex justify="space-between" align="center" mb="6">
              <HStack spacing="4">
                <Avatar
                  size="xl"
                  name={`${userData.name || "Nome"} ${
                    userData.surname || "Sobrenome"
                  }`}
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
                  <Heading size="md">{`${userData.name || "Nome"} ${
                    userData.surname || "Sobrenome"
                  }`}</Heading>
                  <Box>{`${userData.email || "email"}@${
                    userData.email_domain || "dominio.com"
                  }`}</Box>
                </VStack>
              </HStack>
              <Button
                leftIcon={<EditIcon />}
                colorScheme="gray"
                onClick={handleSave}
              >
                Salvar
              </Button>
            </Flex>

            {/* Aba Dados */}
            <Tabs variant="enclosed">
              <TabList>
                <Tab>Dados</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <VStack spacing="4">
                    <Flex width="100%" justify="space-between">
                      {/* Coluna 1: Dados Pessoais */}
                      <Box flex="1" mr="4">
                        <Heading size="xs">Dados Pessoais</Heading>
                        <Box mt="2">
                          <Text fontWeight="bold">Nome Completo</Text>
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
                              setUserData({
                                ...userData,
                                surname: e.target.value,
                              })
                            }
                          />
                        </Box>
                        <Flex mt="2" gap="4">
                          <Box flex="0.2">
                            {" "}
                            {/* Campo DDD com largura menor */}
                            <Text fontWeight="bold">DDD</Text>
                            <Input
                              placeholder="DDD"
                              value={userData.DDD || ""}
                              onChange={(e) => {
                                // Permite apenas números e limita a 2 dígitos
                                const newValue = e.target.value
                                  .replace(/\D/g, "")
                                  .slice(0, 2);
                                setUserData({ ...userData, DDD: newValue });
                              }}
                            />
                          </Box>
                          <Box flex="1">
                            {" "}
                            {/* Campo Telefone com largura maior */}
                            <Text fontWeight="bold">Telefone</Text>
                            <Input
                              placeholder="Telefone"
                              value={userData.phone || ""}
                              onChange={(e) => {
                                // Permite apenas números e limita a 9 dígitos
                                const newValue = e.target.value
                                  .replace(/\D/g, "")
                                  .slice(0, 9);
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
                              setUserData({
                                ...userData,
                                ethnicity: e.target.value,
                              })
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
                              setUserData({
                                ...userData,
                                gender: e.target.value,
                              })
                            }
                          >
                            <option value="feminino">Feminino</option>
                            <option value="masculino">Masculino</option>
                            <option value="nao binario">Não-binário</option>
                            <option value="outros">Outros</option>
                          </Select>
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
                              <Select
                                defaultValue={
                                  proef.idioma === "ingles"
                                    ? "Inglês"
                                    : proef.idioma === "portugues"
                                    ? "Português"
                                    : proef.idioma === "alemao"
                                    ? "Alemão"
                                    : proef.idioma === "frances"
                                    ? "Francês"
                                    : proef.idioma === "italiano"
                                    ? "Italiano"
                                    : proef.idioma === "espanhol"
                                    ? "Espanhol"
                                    : proef.idioma === "japones"
                                    ? "Japonês"
                                    : "Outro"
                                }
                              >
                                <option value="Inglês">Inglês</option>
                                <option value="Português">Português</option>
                                <option value="Alemão">Alemão</option>
                                <option value="Francês">Francês</option>
                                <option value="Italiano">Italiano</option>
                                <option value="Espanhol">Espanhol</option>
                                <option value="Japonês">Japonês</option>
                                <option value="Outro">Outro</option>
                              </Select>

                              <Text fontWeight="bold" mt="2">
                                Nível
                              </Text>
                              <Box mt="2">
                                <Input
                                  placeholder="Insira o nível"
                                  defaultValue={proef.nivel || ""}
                                />
                              </Box>

                              <Text fontWeight="bold" mt="2">
                                Comprovante
                              </Text>
                              <Button
                                leftIcon={<DownloadIcon />}
                                colorScheme="gray"
                                variant="outline"
                                onClick={() => alert(proef.comprovante)} // Substitua com lógica para abrir/baixar o comprovante
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
                            defaultValue={institutionData?.nome || ""}
                          />
                        </Box>
                        <Box mt="2">
                          <Text fontWeight="bold">
                            Comprovante de Matrícula
                          </Text>
                          <Button
                            leftIcon={<DownloadIcon />}
                            colorScheme="gray"
                            variant="outline"
                            onClick={() => alert(institutionData?.comprovante)} // Substitua com lógica para abrir/baixar o comprovante
                          >
                            Ver Comprovante
                          </Button>
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

export default UsuarioCursistaDPEdicao;
