import React from 'react';
import { Text, Box, Flex, Heading, Button, Input, Select, Tabs, Tab, TabList, TabPanels, TabPanel, VStack, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import Header from '../../components/Header';
import Sidebar1 from '../../components/Sidebar1';

const RelatorioHorasPraticasCursista = () => {
  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex flex="1">
        <Sidebar1 />
        <Box flex="1" p="8">
          <Box bg="white" p="6" borderRadius="md" boxShadow="md">
            {/* Título da Página */}
            <Heading size="lg" mb="4">Relatório de Horas Práticas</Heading>

            {/* Tabs para Atual e Histórico */}
            <Tabs variant="enclosed">
              <TabList>
                <Tab>Atual</Tab>
                <Tab>Histórico</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  {/* Conteúdo da aba Atual */}
                  <Flex justify="space-between" mt="4">
                    {/* Coluna 1: Horas Práticas */}
                    <Box flex="1" mr="8">
                      <Heading size="md" mb="4">Horas Práticas</Heading>

                      <VStack spacing="4">
                        <Box w="100%">
                          <Heading size="xs" mb="2">Idioma</Heading>
                          <Select placeholder="Idioma">
                            <option value="Inglês">Inglês</option>
                            <option value="Espanhol">Espanhol</option>
                            <option value="Francês">Francês</option>
                          </Select>
                        </Box>

                        <Box w="100%">
                          <Heading size="xs" mb="2">Categoria</Heading>
                          <Select placeholder="Categoria">
                            <option value="Categoria A">Categoria A</option>
                            <option value="Categoria B">Categoria B</option>
                          </Select>
                        </Box>

                        <Box w="100%">
                          <Heading size="xs" mb="2">Nível</Heading>
                          <Input placeholder="Nível" />
                        </Box>

                        <Box w="100%">
                          <Heading size="xs" mb="2">Carga Horária</Heading>
                          <Input placeholder="Carga Horária" />
                        </Box>

                        <Box w="100%">
                          <Heading size="xs" mb="2">Descrição</Heading>
                          <Input placeholder="Descrição" />
                        </Box>

                        <Box w="100%">
                          <Heading size="xs" mb="2">Link do Portfólio</Heading>
                          <Input placeholder="Link do Portfólio" />
                        </Box>
                      </VStack>
                    </Box>

                    {/* Coluna 2: Orientador Responsável */}
                    <Box flex="1">
                      <Heading size="md" mb="4">Orientador Responsável</Heading>

                      <VStack spacing="4">
                        <Box w="100%">
                          <Heading size="xs" mb="2">Nome</Heading>
                          <Input placeholder="Nome do Orientador" isReadOnly />
                        </Box>

                        <Box w="100%">
                          <Heading size="xs" mb="2">Instituição</Heading>
                          <Input placeholder="Instituição" isReadOnly />
                        </Box>

                        <Box w="100%">
                          <Heading size="xs" mb="2">Última Avaliação</Heading>
                          <Input placeholder="Última Avaliação" isReadOnly />
                        </Box>

                        {/* Botão de Enviar */}
                        <Box alignSelf="flex-end">
                          <Button colorScheme="gray">Enviar</Button>
                        </Box>
                      </VStack>
                    </Box>
                  </Flex>
                </TabPanel>

                <TabPanel>
                  {/* Conteúdo da aba Histórico */}
                  <Heading size="md" mb="4">Histórico de Horas Práticas</Heading>
                  <Table variant="simple" size="md" mt="4">
                    <Thead>
                      <Tr>
                        <Th>Categoria</Th>
                        <Th>Orientador</Th>
                        <Th>Data de Entrega</Th>
                        <Th>Carga Horária</Th>
                        <Th>Feedback</Th>
                        <Th>Status</Th>
                        <Th>Ação</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>Categoria A</Td>
                        <Td>Dr. Silva</Td>
                        <Td>10/10/2023</Td>
                        <Td>20h</Td>
                        <Td>Aprovado</Td>
                        <Td>Concluído</Td>
                        <Td>
                          <Button colorScheme="gray" size="sm">Editar</Button>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>Categoria B</Td>
                        <Td>Prof. Lima</Td>
                        <Td>20/09/2023</Td>
                        <Td>15h</Td>
                        <Td>Pendente</Td>
                        <Td>Em Progresso</Td>
                        <Td>
                          <Button colorScheme="gray" size="sm">Editar</Button>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>Categoria C</Td>
                        <Td>Dr. Costa</Td>
                        <Td>15/08/2023</Td>
                        <Td>10h</Td>
                        <Td>Revisão</Td>
                        <Td>Pendente</Td>
                        <Td>
                          <Button colorScheme="gray" size="sm">Editar</Button>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default RelatorioHorasPraticasCursista;
