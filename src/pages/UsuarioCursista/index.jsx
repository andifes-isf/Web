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

const UsuarioCursista = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const loggedUser = localStorage.getItem("login");

        const response = await api.get("/specialization_student", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const cursista = response.data.data.find(
          (user) => user.login === loggedUser
        );

        if (!cursista) {
          console.error("Usuário logado não encontrado na lista de cursistas.");
          return;
        }

        const { ProfessorIsF } = cursista;

        setUserData({
          ...cursista,
          ...ProfessorIsF.Usuario,
          poca: ProfessorIsF.poca,
          start: ProfessorIsF.start,
          end: ProfessorIsF.end,
          specialization_student: ProfessorIsF.specialization_student,
        });
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
      },
    });
  };

  const handleDownloadPOCA = () => {
    if (userData?.poca) {
      alert(`Baixando certificado POCA: ${userData.poca}`);
      // Aqui você pode implementar a lógica para realizar o download
    } else {
      alert("Certificado POCA não disponível.");
    }
  };

  if (!userData) {
    return <Text>Carregando...</Text>;
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
                      <Box flex="1" mr="4">
                        <Heading size="xs">Dados Pessoais</Heading>
                        <Box mt="2">
                          <Text fontWeight="bold">Nome Completo</Text>
                          <Input
                            placeholder="Nome Completo"
                            value={`${userData.name} ${userData.surname}`}
                            isReadOnly
                          />
                        </Box>
                        <Box mt="2">
                          <Text fontWeight="bold">Telefone</Text>
                          <Input
                            placeholder="Telefone"
                            value={`(${userData.DDD}) ${userData.phone}`}
                            isReadOnly
                          />
                        </Box>
                        <Box mt="2">
                          <Text fontWeight="bold">Etnia</Text>
                          <Input
                            placeholder="Etnia"
                            value={userData.ethnicity}
                            isReadOnly
                          />
                        </Box>
                        <Box mt="2">
                          <Text fontWeight="bold">Gênero</Text>
                          <Input
                            placeholder="Gênero"
                            value={userData.gender}
                            isReadOnly
                          />
                        </Box>
                        <Box mt="2">
                          <Text fontWeight="bold" mb="1">
                            Certificado POCA
                          </Text>
                          <Button
                            leftIcon={<DownloadIcon />}
                            colorScheme="gray"
                            variant="solid"
                            size="sm"
                            borderRadius="md"
                            _hover={{ bg: "gray.200" }}
                            onClick={handleDownloadPOCA}
                          >
                            Baixar Certificado
                          </Button>
                        </Box>
                      </Box>
                    </Flex>
                  </VStack>
                </TabPanel>

                {/* Aba Componentes Curriculares */}
                <TabPanel>
                  <VStack spacing="4" align="start">
                    <Box>
                      <Heading size="xs" mb="2">
                        Componentes Curriculares
                      </Heading>
                      <Text fontWeight="bold">Núcleo Comum</Text>
                      <Input
                        placeholder="Horas Atuais"
                        value={`${userData.nc_hours}h`}
                        isReadOnly
                      />
                      <Text fontWeight="bold">CCI</Text>
                      <Input
                        placeholder="Horas Atuais"
                        value={`${userData.cci_hours}h`}
                        isReadOnly
                      />
                      <Text fontWeight="bold">CCI - P</Text>
                      <Input
                        placeholder="Horas Atuais"
                        value={`${userData.ccip_hours}h`}
                        isReadOnly
                      />
                      <Text fontWeight="bold">CCTI</Text>
                      <Input
                        placeholder="Horas Atuais"
                        value={`${userData.ccti_hours}h`}
                        isReadOnly
                      />
                    </Box>
                  </VStack>
                </TabPanel>

                {/* Aba Horas */}
                <TabPanel>
                  <VStack spacing="4" align="start">
                    <Box>
                      <Heading size="xs" mb="2">
                        Horas Práticas
                      </Heading>
                      <Input
                        placeholder="Horas Práticas"
                        value={`${userData.practical_hours}h`}
                        isReadOnly
                      />
                    </Box>
                    <Box>
                      <Heading size="xs" mb="2">
                        Horas Teóricas
                      </Heading>
                      <Input
                        placeholder="Horas Teóricas"
                        value="" // Valor vazio por enquanto
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

export default UsuarioCursista;
