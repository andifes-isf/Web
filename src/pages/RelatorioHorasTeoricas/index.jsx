import React from 'react';
import { Box, Flex, Heading, Button, Input, VStack, HStack } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons'; // Certifique-se de importar o ícone
import Header from '../../components/Header';
import Sidebar1 from '../../components/Sidebar1';

const RelatorioHorasTeoricas = () => {
  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex flex="1">
        <Sidebar1 />
        <Box flex="1" p="8">
          <Box bg="white" p="6" borderRadius="md" boxShadow="md">
            {/* Título da Página */}
            <Heading size="lg" mb="4">Relatório de Horas Teóricas</Heading>

            {/* Conteúdo do Relatório de Horas Teóricas */}
            <Flex justify="space-between" mt="4">
              {/* Coluna 1: Docente Ministrante */}
              <Box flex="1" mr="8">
                <Heading size="md" mb="4">Docente Ministrante</Heading>

                <VStack spacing="4">
                  {/* Campo Nome */}
                  <Box w="100%">
                    <Heading size="xs" mb="2">Nome</Heading>
                    <Input placeholder="Nome do Docente" />
                  </Box>

                  {/* Campo Instituição */}
                  <Box w="100%">
                    <Heading size="xs" mb="2">Instituição</Heading>
                    <Input placeholder="Instituição" />
                  </Box>

                  {/* Campo Componente Curricular */}
                  <Box w="100%">
                    <Heading size="xs" mb="2">Componente Curricular</Heading>
                    <Input placeholder="Componente Curricular" />
                  </Box>

                  {/* Campo Eixo */}
                  <Box w="100%">
                    <Heading size="xs" mb="2">Eixo</Heading>
                    <Input placeholder="Eixo" />
                  </Box>
                </VStack>
              </Box>

              {/* Coluna 2: Documento */}
              <Box flex="1">
                <Heading size="md" mb="4">Documento</Heading>

                <VStack spacing="4">
                  {/* Campo Documento Excel */}
                  <Box w="100%">
                    <Heading size="xs" mb="2">Documento Excel</Heading>
                    <Button leftIcon={<DownloadIcon />} colorScheme="gray" variant="outline" width="100%">
                      .xml
                    </Button>
                  </Box>

                  {/* Botão de Enviar */}
                  <Box w="100%" textAlign="right">
                    <Button colorScheme="gray" width="100%">Enviar</Button>
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

export default RelatorioHorasTeoricas;
