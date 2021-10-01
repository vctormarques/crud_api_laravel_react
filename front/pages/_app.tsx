import { ChakraProvider } from "@chakra-ui/react"
import  Header  from "../src/components/Header";
import { createContext } from 'react';
import {  Container, useColorModeValue } from "@chakra-ui/react";
import { ModalProvider } from '../src/components/Modals/context'
import Modal from '../src/components/Modals';


function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider>
      <ModalProvider>
        <Container maxW="container.xl" bg={useColorModeValue('gray.50', 'gray.900')} px={0}>
          <Header/>
          <Component {...pageProps} />
          <Modal />
        </Container>
      </ModalProvider>
  </ChakraProvider>
  )
}

export default MyApp
