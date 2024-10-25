import React from 'react';
import { Box, Flex, Heading, Button, Input, Avatar, IconButton, VStack, HStack, Tabs, Tab, TabList, TabPanel, TabPanels, Text, Select } from '@chakra-ui/react';
import { DownloadIcon, EditIcon } from '@chakra-ui/icons';
import { FaCamera } from 'react-icons/fa';
import Header from '../../components/Header';
import Sidebar1 from '../../components/Sidebar1';

const UsuarioCursistaDPEdicao = () => {
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
                <Avatar size="xl" name="Nome e Sobrenome" src="profile-placeholder.png" />
                <IconButton
                  aria-label="Trocar Foto"
                  icon={<FaCamera />}
                  variant="outline"
                  borderRadius="full"
                  size="sm"
                />
              <VStack align="start" spacing="0" ml="4">
                <Heading size="md">Nome e Sobrenome</Heading>
                <Box>email@email.com</Box>
              </VStack>
              </HStack>
              <Button leftIcon={<EditIcon />} colorScheme="gray">
                Salvar
              </Button>
            </Flex>

            {/* Tabs para dados e componentes curriculares */}
            <Tabs variant="enclosed">
              <TabList>
                <Tab>Dados</Tab>
                <Tab>Componentes Curriculares</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  {/* Seção de Dados com edição habilitada */}
                  <VStack spacing="4">
                    <Flex width="100%" justify="space-between">
                      {/* Coluna 1: Dados Pessoais */}
                      <Box flex="1" mr="4">
                        <Heading size="xs">Dados Pessoais</Heading>
                        <Box mt="2">
                          <Text fontWeight="bold">Nome Completo</Text>
                          <Input placeholder="Nome Completo" defaultValue="Nome Sobrenome" />
                        </Box>
                        <Box mt="2">
                          <Text fontWeight="bold">Telefone</Text>
                          <Input placeholder="Telefone" defaultValue="(99) 99999-9999" />
                        </Box>
                        <Box mt="2">
                          <Text fontWeight="bold">Etnia</Text>
                          <Select defaultValue="Pardo">
                            <option value="Amarelo">Amarelo</option>
                            <option value="Branco">Branco</option>
                            <option value="Indígena">Indígena</option>
                            <option value="Pardo">Pardo</option>
                            <option value="Preto">Preto</option>
                            <option value="Quilombola">Quilombola</option>
                          </Select>
                        </Box>
                        <Box mt="2">
                          <Text fontWeight="bold">Gênero</Text>
                          <Select defaultValue="Masculino">
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Não-binário">Não-binário</option>
                            <option value="Outro">Outro</option>
                          </Select>
                        </Box>
                      </Box>

                      {/* Coluna 2: Proeficiência Linguística */}
                      <Box flex="1" mr="4">
                        <Heading size="xs">Proeficiência Linguística</Heading>
                        <Box mt="2">
                          <Text fontWeight="bold">Nível</Text>
                          <Select defaultValue="Avançado">
                            <option value="Básico">Básico</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                          </Select>
                        </Box>
                        <Box mt="2">
                          <Text fontWeight="bold">Idioma</Text>
                          <Select defaultValue="Inglês">
                            <option value="Inglês">Inglês</option>
                            <option value="Espanhol">Espanhol</option>
                            <option value="Francês">Francês</option>
                            <option value="Alemão">Alemão</option>
                            <option value="Outro">Outro</option>
                          </Select>
                        </Box>
                        <Box mt="2">
                          <Text fontWeight="bold">Documento Comprobatório</Text>
                          <Button leftIcon={<DownloadIcon />} colorScheme="gray" variant="outline">
                            Certificado.pdf
                          </Button>
                        </Box>
                      </Box>

                      {/* Coluna 3: Instituição */}
                      <Box flex="1">
                        <Heading size="xs">Instituição</Heading>
                        <Box mt="2">
                          <Text fontWeight="bold">Nome da Instituição</Text>
                          <Input placeholder="Nome da Instituição" defaultValue="Universidade XYZ" />
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

                <TabPanel>
                  {/* Seção de Componentes Curriculares sem edição */}
                  <VStack spacing="4">
                    <Flex width="100%" justify="space-between">
                      {/* Coluna 1: Componentes Curriculares */}
                      <Box flex="1" mr="4">
                        <Heading size="xs">Componentes Curriculares</Heading>

                        <Box mt="2">
                          <Text fontWeight="bold">Núcleo Comum</Text>
                          <Flex>
                            <Input placeholder="Horas Atuais" value="40h" isReadOnly />
                            <Input placeholder="Total Horas" value="100h" isReadOnly ml="2" />
                          </Flex>
                        </Box>

                        <Box mt="2">
                          <Text fontWeight="bold">CCI</Text>
                          <Flex>
                            <Input placeholder="Horas Atuais" value="30h" isReadOnly />
                            <Input placeholder="Total Horas" value="100h" isReadOnly ml="2" />
                          </Flex>
                        </Box>

                        <Box mt="2">
                          <Text fontWeight="bold">CCTI</Text>
                          <Flex>
                            <Input placeholder="Horas Atuais" value="50h" isReadOnly />
                            <Input placeholder="Total Horas" value="100h" isReadOnly ml="2" />
                          </Flex>
                        </Box>

                        <Box mt="2">
                          <Text fontWeight="bold">CCI - P</Text>
                          <Flex>
                            <Input placeholder="Horas Atuais" value="25h" isReadOnly />
                            <Input placeholder="Total Horas" value="100h" isReadOnly ml="2" />
                          </Flex>
                        </Box>
                      </Box>

                      {/* Coluna 2: Horas (Práticas, Teóricas, Orientação) */}
                      <Box flex="1">
                        <Heading size="xs">Horas</Heading>

                        <Box mt="2">
                          <Text fontWeight="bold">Horas Práticas</Text>
                          <Input placeholder="Horas Práticas" value="40h" isReadOnly />
                        </Box>

                        <Box mt="2">
                          <Text fontWeight="bold">Horas Teóricas</Text>
                          <Input placeholder="Horas Teóricas" value="60h" isReadOnly />
                        </Box>

                        <Box mt="2">
                          <Text fontWeight="bold">Horas Orientação</Text>
                          <Input placeholder="Horas Orientação" value="20h" isReadOnly />
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
