import React from 'react';
import { Box, Flex, Heading, Button, Input, VStack } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import Header from '../../components/Header';
import Sidebar1 from '../../components/Sidebar1';

const RelatorioHorasTeoricas = () => {
  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex flex="1">
        <Sidebar1 />
        <Box flex="1" p="8" display="flex" justifyContent="center" alignItems="center">
          <Box bg="white" p="8" borderRadius="md" boxShadow="md" width="400px">
            {/* Título da Seção */}
            <Heading size="md" mb="6" textAlign="center">Docente Ministrante</Heading>

            {/* Formulário do Relatório de Horas Teóricas */}
            <VStack spacing="6">
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

              {/* Campo Documento Excel */}
              <Box w="100%">
                <Heading size="xs" mb="2">Documento Excel</Heading>
                <Button leftIcon={<DownloadIcon />} colorScheme="gray" variant="outline">
                  .xml
                </Button>
              </Box>

              {/* Botão Enviar */}
              <Box w="100%" textAlign="center">
                <Button colorScheme="gray" width="100%">Enviar</Button>
              </Box>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default RelatorioHorasTeoricas;
