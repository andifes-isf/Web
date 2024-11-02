import React from 'react';
import { Box, Flex, Heading, Button, Input, VStack, Textarea } from '@chakra-ui/react';
import Header from '../../components/Header';
import Sidebar1 from '../../components/Sidebar1';

const Ementa = () => {
  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex flex="1">
        <Sidebar1 />
        <Box flex="1" p="8">
          <Box bg="white" p="6" borderRadius="md" boxShadow="md">
            {/* Título da Página */}
            <Heading size="lg" mb="6">Ementa</Heading>

            {/* Conteúdo Base e Conteúdo Pragmático */}
            <Flex justify="space-between">
              {/* Coluna 1: Conteúdo Base */}
              <Box flex="1" mr="8">
                <Heading size="md" mb="4">Conteúdo Base</Heading>
                <VStack spacing="4" align="stretch">
                  <Box>
                    <Heading size="xs" mb="2">Nome</Heading>
                    <Input placeholder="Nome" isReadOnly />
                  </Box>
                  <Box>
                    <Heading size="xs" mb="2">Idioma</Heading>
                    <Input placeholder="Idioma" isReadOnly />
                  </Box>
                  <Box>
                    <Heading size="xs" mb="2">Categoria</Heading>
                    <Input placeholder="Categoria" isReadOnly />
                  </Box>
                  <Box>
                    <Heading size="xs" mb="2">Carga Horária</Heading>
                    <Input placeholder="Carga Horária" isReadOnly />
                  </Box>
                  <Box>
                    <Heading size="xs" mb="2">Proficiência</Heading>
                    <Input placeholder="Proficiência" isReadOnly />
                  </Box>
                  <Box>
                    <Heading size="xs" mb="2">Professor</Heading>
                    <Input placeholder="Professor" isReadOnly />
                  </Box>
                  <Box>
                    <Heading size="xs" mb="2">Instituição</Heading>
                    <Input placeholder="Instituição" isReadOnly />
                  </Box>
                  <Box>
                    <Heading size="xs" mb="2">Descrição</Heading>
                    <Textarea placeholder="Descrição" isReadOnly />
                  </Box>
                  <Box>
                    <Heading size="xs" mb="2">Objetivos</Heading>
                    <Textarea placeholder="Objetivos" isReadOnly />
                  </Box>
                  <Box>
                    <Heading size="xs" mb="2">Justificativa</Heading>
                    <Textarea placeholder="Justificativa" isReadOnly />
                  </Box>
                </VStack>
              </Box>

              {/* Coluna 2: Conteúdo Pragmático */}
              <Box flex="1">
                <Heading size="md" mb="4">Conteúdo Pragmático</Heading>
                <VStack spacing="4" align="stretch">
                  <Box>
                    <Heading size="xs" mb="2">Aspectos Funcionais</Heading>
                    <Textarea placeholder="Aspectos Funcionais" isReadOnly />
                  </Box>
                  <Box>
                    <Heading size="xs" mb="2">Aspectos Linguísticos</Heading>
                    <Textarea placeholder="Aspectos Linguísticos" isReadOnly />
                  </Box>
                  <Box>
                    <Heading size="xs" mb="2">Aspectos Interculturais</Heading>
                    <Textarea placeholder="Aspectos Interculturais" isReadOnly />
                  </Box>
                </VStack>

                {/* Botão de Download */}
                <Button colorScheme="gray" mt="6" alignSelf="flex-end">Download</Button>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Ementa;
