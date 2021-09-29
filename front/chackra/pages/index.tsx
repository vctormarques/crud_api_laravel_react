import logo from './img/logo512.png';
import Head from 'next/head'
import Image from 'next/image'
import { ReactNode } from 'react';
import {  Container, Icon, Table, Thead, Tbody,  Tr, Th, Td, HStack, useColorModeValue, Link, IconButton, Box } from "@chakra-ui/react";
import {  FcBullish } from 'react-icons/fc';
import {  AiTwotoneEdit,AiOutlineClose } from 'react-icons/ai';

const Links = ['Listar', 'Cadastrar'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Home() {
  return (
    <>
    <Container  maxW="container.xl"  bg={useColorModeValue('gray.50', 'gray.900')} px={0}>
    <HStack spacing={8} alignItems={'center'}  bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Box><Icon as={FcBullish} w={10} h={10} /></Box>
      <HStack
        as={'nav'}
        spacing={4}
        display={{ base: 'none', md: 'flex' }}>
        {Links.map((link) => (
          <NavLink key={link}>{link}</NavLink>
        ))}
      </HStack>
    </HStack>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Excluir</Th>
            <Th>Editar</Th>
            <Th>Nome</Th>
            <Th>Sexo</Th>
            <Th>Data de Nascimento</Th>
            <Th>Hobby</Th>
            <Th isNumeric>Idade</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <IconButton
                size="xs"  
                variant="outline"
                colorScheme="red"
                aria-label="Send email"
                fontSize="18px"
                icon={<AiOutlineClose />}
              /> 
            </Td>
            <Td className="center">
              <IconButton
                size="xs"  
                variant="outline"
                colorScheme="orange"
                aria-label="Send email"
                fontSize="18px"
                icon={<AiTwotoneEdit />}
              /> 
            </Td>
            <Td>Victor Marques</Td>
            <Td>M</Td>
            <Td>16/11/1993</Td>
            <Td>Churrasco</Td>
            <Td isNumeric>25</Td>
          </Tr>
        </Tbody>
      </Table>
    </Container>
    </>
    )
}
