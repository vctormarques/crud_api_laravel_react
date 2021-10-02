import ButtonComponent from '../Button';
import React, { } from 'react';
import { HStack, useColorModeValue, Button } from "@chakra-ui/react";
import { useModalContext } from '../Modals/context';
import { Box, Flex, Menu } from '@chakra-ui/react';

const Home = () => {
  const { abrilModal } = useModalContext();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} marginTop={5}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box>Lista de Desenvolvedores</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <ButtonComponent
                colorScheme="teal"
                onClick={() => abrilModal({ title: 'Cadastrar um desenvolvedor', destino: 'Cadastrar' })}>
                Cadastrar
              </ButtonComponent>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
export default Home;

