import  ButtonComponent  from '../Button';
import React, { } from 'react';
import { HStack, useColorModeValue, Button  } from "@chakra-ui/react";
import Modal from '../Modals';
import { useModalContext } from '../Modals/context';

const Home = () => {
  const { abrilModal } = useModalContext();
  return (
    <>
           <HStack spacing={8} alignItems={'center'} bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
          <h4>Developers</h4>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
                <ButtonComponent colorScheme="teal" onClick={() => abrilModal({ title: 'Cadastrar um desenvolvedor', destino: 'Cadastrar' })}> Cadastrar </ButtonComponent>
          </HStack>
        </HStack>

    </>
  );
};
export default Home;

