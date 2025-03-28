import React, { useEffect, useState } from 'react';
import {
  Input,
  Box,
  Flex,
  Heading,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  VStack,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
} from '@chakra-ui/react';
import Header from '../../components/Header';
import Sidebar1 from '../../components/Sidebar1';
import api from '../../services/api';

const CursoAtualCursista = () => {
  const [disciplinas, setDisciplinas] = useState([]);
  const [turmaAtual, setTurmaAtual] = useState(null);

  useEffect(() => {
    const fetchDisciplinas = async () => {
      try {
        const response = await api.get('/disciplina_especializacao');
        setDisciplinas(response.data);
      } catch (error) {
        console.error('Erro ao buscar disciplinas:', error);
      }
    };

    const fetchTurmaAtual = async () => {
      try {
        const response = await api.get('/specialization_student/my_classes');
        if (!response.data.error && response.data.data.length > 0) {
          setTurmaAtual(response.data.data[0]); // Pega a primeira turma encontrada
        }
      } catch (error) {
        console.error('Erro ao buscar turma atual:', error);
      }
    };

    fetchDisciplinas();
    fetchTurmaAtual();
  }, []);

  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex flex="1">
        <Sidebar1 />
        <Box flex="1" p="8">
          <Box bg="white" p="6" borderRadius="md" boxShadow="md">
            {/* Título da Página */}
            <Heading size="lg" mb="4">Curso - Turma Atual</Heading>

            {/* Tabs para Inscrição, Turma Atual e Histórico */}
            <Tabs variant="enclosed">
              <TabList>
                <Tab>Inscrição</Tab>
                <Tab>Turma Atual</Tab>
                <Tab>Histórico</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  {/* Conteúdo da aba Inscrição */}
                  <Heading size="md" mb="4">Inscrição</Heading>
                  <Box overflowX="auto">
                    {disciplinas.length > 0 ? (
                      <Table variant="simple" size="md">
                        <Thead>
                          <Tr>
                            <Th>Nome da Disciplina</Th>
                            <Th>Descrição</Th>
                            <Th>Eixo Temático</Th>
                            <Th>Categoria</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {disciplinas.map((disciplina, index) => (
                            <Tr key={index}>
                              <Td>{disciplina.nome}</Td>
                              <Td>{disciplina.descricao}</Td>
                              <Td>{disciplina.eixoTematico}</Td>
                              <Td>{disciplina.categoria}</Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    ) : (
                      <Text>Nenhuma disciplina encontrada.</Text>
                    )}
                  </Box>
                </TabPanel>

                <TabPanel>
                  {/* Conteúdo da aba Turma Atual */}
                  <Heading size="md" mb="4">Turma Atual</Heading>
                  {turmaAtual ? (
                    <Flex justify="space-between" mt="4">
                      <Box flex="1" mr="8">
                        <VStack spacing="4" align="stretch">
                          <Box>
                            <Heading size="xs" mb="2">Nome da Turma</Heading>
                            <Input
                              placeholder="Nome da Turma"
                              value={turmaAtual.disciplina || ''}
                              isReadOnly
                            />
                          </Box>
                          <Box>
                            <Heading size="xs" mb="2">Idioma</Heading>
                            <Input placeholder="Idioma" value="" isReadOnly />
                          </Box>
                          <Box>
                            <Heading size="xs" mb="2">Componente</Heading>
                            <Input placeholder="Componente" value="" isReadOnly />
                          </Box>
                          <Box>
                            <Heading size="xs" mb="2">Docente</Heading>
                            <Input placeholder="Docente" value="" isReadOnly />
                          </Box>
                        </VStack>
                      </Box>

                      <Box flex="1">
                        <VStack spacing="4" align="stretch">
                          <Box>
                            <Heading size="xs" mb="2">Horas Teóricas</Heading>
                            <Input placeholder="Horas Teóricas" value="" isReadOnly />
                          </Box>
                          <Box>
                            <Heading size="xs" mb="2">Horas Práticas</Heading>
                            <Input placeholder="Horas Práticas" value="" isReadOnly />
                          </Box>
                        </VStack>
                      </Box>
                    </Flex>
                  ) : (
                    <Text>Turma atual não encontrada.</Text>
                  )}
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
                          <Td>
                            <a
                              href="http://moodle.com/turmaA"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Link
                            </a>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>Turma B</Td>
                          <Td>40</Td>
                          <Td>Professor Y</Td>
                          <Td>Em andamento</Td>
                          <Td>Ementa B</Td>
                          <Td>
                            <a
                              href="http://moodle.com/turmaB"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Link
                            </a>
                          </Td>
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
