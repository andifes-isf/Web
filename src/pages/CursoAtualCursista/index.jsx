import React from 'react';
import { Input, Box, Flex, Heading, Tabs, Tab, TabList, TabPanels, TabPanel, VStack, Select, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import Header from '../../components/Header';
import Sidebar1 from '../../components/Sidebar1';

const CursoAtualCursista = () => {
  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex flex="1">
        <Sidebar1 />
        <Box flex="1" p="8">
          <Box bg="white" p="6" borderRadius="md" boxShadow="md">
            {/* Título da Página */}
            <Heading size="lg" mb="4">Curso - Turma Atual</Heading>

            {/* Tabs para Turma Atual e Histórico */}
            <Tabs variant="enclosed">
              <TabList>
                <Tab>Turma Atual</Tab>
                <Tab>Histórico</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  {/* Conteúdo da aba Turma Atual */}
                  <Flex justify="space-between" mt="4">
                    <Box flex="1" mr="8">
                      <VStack spacing="4" align="stretch">
                        <Box>
                          <Heading size="xs" mb="2">Nome da Turma</Heading>
                          <Select placeholder="Nome da Turma" isReadOnly>
                            <option value="turma1">Turma 1</option>
                            <option value="turma2">Turma 2</option>
                          </Select>
                        </Box>
                        <Box>
                          <Heading size="xs" mb="2">Idioma</Heading>
                          <Select placeholder="Idioma" isReadOnly>
                            <option value="ingles">Inglês</option>
                            <option value="espanhol">Espanhol</option>
                          </Select>
                        </Box>
                        <Box>
                          <Heading size="xs" mb="2">Componente</Heading>
                          <Select placeholder="Componente" isReadOnly>
                            <option value="componente1">Componente 1</option>
                            <option value="componente2">Componente 2</option>
                          </Select>
                        </Box>
                        <Box>
                          <Heading size="xs" mb="2">Docente</Heading>
                          <Select placeholder="Docente" isReadOnly>
                            <option value="docente1">Docente 1</option>
                            <option value="docente2">Docente 2</option>
                          </Select>
                        </Box>
                      </VStack>
                    </Box>

                    <Box flex="1">
                      <VStack spacing="4" align="stretch">
                        <Box>
                          <Heading size="xs" mb="2">Horas Teóricas</Heading>
                          <Input placeholder="Horas Teóricas" isReadOnly />
                        </Box>
                        <Box>
                          <Heading size="xs" mb="2">Horas Práticas</Heading>
                          <Input placeholder="Horas Práticas" isReadOnly />
                        </Box>
                      </VStack>
                    </Box>
                  </Flex>
                </TabPanel>

                <TabPanel>
                  {/* Conteúdo da aba Histórico com Tabela */}
                  <Heading size="md" mb="4">Histórico de Turmas</Heading>
                  <Box mb="4">
                    <Select placeholder="Escolha o Componente" w="200px">
                      <option value="componente1">Componente 1</option>
                      <option value="componente2">Componente 2</option>
                    </Select>
                  </Box>
                  <Box overflowX="auto">
                    <Table variant="simple" size="md">
                      <Thead>
                        <Tr>
                          <Th>Nome da Turma</Th>
                          <Th>Total de Horas</Th>
                          <Th>Docente</Th>
                          <Th>Status</Th>
                          <Th>Ementa</Th>
                          <Th>Moodle</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>Turma A</Td>
                          <Td>50</Td>
                          <Td>Professor X</Td>
                          <Td>Concluído</Td>
                          <Td>Ementa A</Td>
                          <Td><a href="http://moodle.com/turmaA" target="_blank" rel="noopener noreferrer">Link</a></Td>
                        </Tr>
                        <Tr>
                          <Td>Turma B</Td>
                          <Td>40</Td>
                          <Td>Professor Y</Td>
                          <Td>Em andamento</Td>
                          <Td>Ementa B</Td>
                          <Td><a href="http://moodle.com/turmaB" target="_blank" rel="noopener noreferrer">Link</a></Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CursoAtualCursista;
