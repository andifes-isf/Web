import React from 'react';
import { Box, Flex, Heading, Button, Input, Select, VStack } from '@chakra-ui/react';
import Header from '../../components/Header';
import Sidebar1 from '../../components/Sidebar1';

const FeedbackCursista = () => {
  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex flex="1">
        <Sidebar1 />
        <Box flex="1" p="8">
          <Box bg="white" p="6" borderRadius="md" boxShadow="md" maxW="md" mx="auto">
            {/* Título da Página */}
            <Heading size="lg" mb="6" textAlign="center">Curso - Feedback</Heading>

            {/* Formulário de Feedback */}
            <VStack spacing="4" align="stretch">
              <Box>
                <Heading size="xs" mb="2">Nome da Turma</Heading>
                <Input placeholder="Nome da Turma" />
              </Box>

              <Box>
                <Heading size="xs" mb="2">Docente</Heading>
                <Input placeholder="Docente" />
              </Box>

              <Box>
                <Heading size="xs" mb="2">Qual plataforma foi utilizada?</Heading>
                <Select placeholder="Escolha">
                  <option value="plataforma1">Plataforma 1</option>
                  <option value="plataforma2">Plataforma 2</option>
                  <option value="plataforma3">Plataforma 3</option>
                </Select>
              </Box>

              <Box>
                <Heading size="xs" mb="2">Qual sua satisfação com o curso?</Heading>
                <Select placeholder="Escolha">
                  <option value="satisfeito">Satisfeito</option>
                  <option value="neutro">Neutro</option>
                  <option value="insatisfeito">Insatisfeito</option>
                </Select>
              </Box>

              <Box>
                <Heading size="xs" mb="2">Qual sua avaliação do professor?</Heading>
                <Select placeholder="Escolha">
                  <option value="excelente">Excelente</option>
                  <option value="bom">Bom</option>
                  <option value="regular">Regular</option>
                  <option value="ruim">Ruim</option>
                </Select>
              </Box>

              <Box>
                <Heading size="xs" mb="2">Qual sua avaliação do material didático?</Heading>
                <Select placeholder="Escolha">
                  <option value="excelente">Excelente</option>
                  <option value="bom">Bom</option>
                  <option value="regular">Regular</option>
                  <option value="ruim">Ruim</option>
                </Select>
              </Box>

              {/* Botão de Enviar */}
              <Button colorScheme="gray" alignSelf="center" mt="4">Enviar</Button>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default FeedbackCursista;
