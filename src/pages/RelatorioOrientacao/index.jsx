import React from 'react';
import { Box, Flex, Heading, Button, Input, Select, VStack, Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react';
import Header from '../../components/Header';
import Sidebar1 from '../../components/Sidebar1';

const RelatorioOrientacao = () => {
  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex flex="1">
        <Sidebar1 />
        <Box flex="1" p="8">
          <Box bg="white" p="6" borderRadius="md" boxShadow="md">
            {/* Título da Página */}
            <Heading size="lg" mb="4">Relatório de Orientação</Heading>

            {/* Conteúdo do Relatório de Orientação */}
            <Flex justify="space-between" mt="4">
              {/* Coluna 1: Horas de Orientação */}
              <Box flex="1" mr="8">
                <Heading size="md" mb="4">Horas de Orientação</Heading>

                <VStack spacing="4">
                  <Box w="100%">
                    <Heading size="xs" mb="2">Avaliação</Heading>
                    <Select placeholder="Selecione a Avaliação">
                      <option value="Excelente">Excelente</option>
                      <option value="Bom">Bom</option>
                      <option value="Regular">Regular</option>
                      <option value="Ruim">Ruim</option>
                    </Select>
                  </Box>

                  <Box w="100%">
                    <Heading size="xs" mb="2">Data</Heading>
                    <Input type="date" placeholder="Data" />
                  </Box>

                  <Box w="100%">
                    <Heading size="xs" mb="2">Carga Horária</Heading>
                    <Input placeholder="Carga Horária" />
                  </Box>

                  <Box w="100%">
                    <Heading size="xs" mb="2">Categoria</Heading>
                    <CheckboxGroup>
                      <Stack spacing={2} direction="column">
                        <Checkbox value="Categoria A">Categoria A</Checkbox>
                        <Checkbox value="Categoria B">Categoria B</Checkbox>
                        <Checkbox value="Categoria C">Categoria C</Checkbox>
                      </Stack>
                    </CheckboxGroup>
                  </Box>

                  <Box w="100%">
                    <Heading size="xs" mb="2">Descrição</Heading>
                    <Input placeholder="Descrição" />
                  </Box>
                </VStack>
              </Box>

              {/* Coluna 2: Cursista */}
              <Box flex="1" mr="8">
                <Heading size="md" mb="4">Cursista</Heading>

                <VStack spacing="4">
                  <Box w="100%">
                    <Heading size="xs" mb="2">Nome</Heading>
                    <Input placeholder="Nome do Cursista" />
                  </Box>

                  <Box w="100%">
                    <Heading size="xs" mb="2">Instituição</Heading>
                    <Input placeholder="Instituição" />
                  </Box>
                </VStack>
              </Box>

              {/* Coluna 3: Orientador Responsável */}
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

                  {/* Botão de Enviar */}
                  <Box alignSelf="flex-end">
                    <Button colorScheme="gray">Enviar</Button>
                  </Box>
                </VStack>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default RelatorioOrientacao;
