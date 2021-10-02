import { ChakraProvider } from "@chakra-ui/react"
import Header from "../src/components/Header";
import { Container, useColorModeValue } from "@chakra-ui/react";
import { ModalProvider } from '../src/components/Modals/context'
import ModalGenerico from '../src/components/Modals';

function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider>
      <Container maxW="container.lg" bg={useColorModeValue('gray.50', 'gray.900')} px={0} >
        <ModalProvider>
          <Header />
          <Component {...pageProps} />
          <ModalGenerico />
        </ModalProvider>
      </Container>
    </ChakraProvider>
  )
}

export default MyApp
