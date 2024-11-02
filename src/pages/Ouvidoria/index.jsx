import React from 'react';
import { Box, Flex, Heading, Button, Select, Textarea, Checkbox, VStack } from '@chakra-ui/react';
import Header from '../../components/Header';
import Sidebar1 from '../../components/Sidebar1';

const Ouvidoria = () => {
  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex flex="1">
        <Sidebar1 />
        <Box flex="1" p="8">
          <Box bg="white" p="6" borderRadius="md" boxShadow="md" maxW="lg" mx="auto">
            {/* Título da Página */}
            <Heading size="lg" mb="6">Ouvidoria</Heading>

            {/* Texto de Introdução */}
            <Box mb="6" textAlign="center">
              <Heading size="sm" mb="2">
                Este canal é para comunicação direta com a Coordenação do Curso
              </Heading>
            </Box>

            {/* Formulário de Ouvidoria */}
            <VStack spacing="4" align="stretch">
              <Box>
                <Heading size="xs" mb="2">Qual o principal tópico da mensagem?</Heading>
                <Select placeholder="Escolha">
                  <option value="duvida">Dúvida</option>
                  <option value="reclamacao">Reclamação</option>
                  <option value="elogio">Elogio</option>
                  <option value="sugestao">Sugestão</option>
                </Select>
              </Box>

              <Box>
                <Heading size="xs" mb="2">Digite sua resposta</Heading>
                <Textarea placeholder="Digite sua resposta" />
              </Box>

              <Checkbox>Enviar anonimamente</Checkbox>

              {/* Botão de Enviar */}
              <Button colorScheme="gray" width="100%">Enviar</Button>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Ouvidoria;
