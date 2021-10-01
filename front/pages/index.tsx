import logo from './img/logo512.png';
import Head from 'next/head'
import Image from 'next/image'
import Axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import Moment from 'moment';
import { useHistory } from 'react-router-dom';

import {
  Container, Table, Thead, Tbody, Tr, Th, Td, HStack, useColorModeValue, Link, IconButton, Box, Button, useDisclosure, FormControl, Input, FormLabel, Select,
  NumberInput, NumberInputStepper, NumberInputField, NumberIncrementStepper, NumberDecrementStepper, Textarea, Center, Text
} from "@chakra-ui/react";
import { AiTwotoneEdit, AiOutlineClose } from 'react-icons/ai';
import InputMask from 'react-input-mask';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from "@chakra-ui/react";

export default function Home2() {
  const { isOpen: isModalCadastrar, onOpen: onModalCadastrar, onClose: onModalCadastrarClose } = useDisclosure()
  const { isOpen: isModalEditar, onOpen: onModalEditar, onClose: onModalEditarClose } = useDisclosure()
  const { isOpen: isModalExcluir, onOpen: onModalExcluir, onClose: onModalExcluirClose } = useDisclosure()
  const updateModal = (id, nome) => {
    setNome(nome.map((val) => val.id === id));
  }

  const [nome, setNome] = useState("");
  const [sexo, setSexo] = useState("");
  const [idade, setIdade] = useState("");
  const [hobby, setHobby] = useState("");
  const [datanascimento, setDataNascimento] = useState("");
  const [nomeList, setnomeList] = useState([]);
  const [data, setData] = useState({
    nome: "",
    sexo: "",
    idade: "",
    hobby: "",
    datanascimento: ""
  });



  useEffect(() => {
    Axios.get('http://localhost:8000/api/v1/developers').then((response) => {
      setnomeList(response.data);
    }).catch(error => {
      if (error.response) {
        console.log(error.response);
      }
    });
  }, [])

  const btnCadastrar = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:8000/api/v1/developers', 
    {
      nome: nome,
      sexo: sexo,
      idade: idade,
      hobby: hobby,
      datanascimento: datanascimento,
    }).then(() => {
      window.location.reload();

    }).catch(function (error) {
      console.log(error.toJSON());
    });
  }

  const btnDelete = (id) => {
    Axios.delete(`http://localhost:8000/api/v1/developers/${id}`).then(() => {
      window.location.reload(); 
    }).catch(error => {
      if (error.response) {
        console.log(error.response);
      }
    });
  }


  const btnEditar = (e) => {
    alert("Editou")
    e.preventDefault();
    Axios.put('http://localhost:8000/api/v1/developers/${id}', {
      nome: nome,
      sexo: sexo,
      idade: idade,
      hobby: hobby,
      datanascimento: datanascimento
    }).then(() => {
      alert("Cadastrado com sucesso");
    })
  }


  return (
    <>
        {/* <ModalsComponent  onClose={onModalCadastrarClose} isOpen={isModalCadastrar} >
        <ModalHeader>Excluir desenvolvedor</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text>Deseja excluir o desenvolvedor ?</Text>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} >
              Excluir
            </Button>
            <Button onClick={onModalCadastrarClose} mr={3}>Fechar</Button>
          </ModalFooter>
      </ModalsComponent> */}
{/* 
<Modal
isOpen={isModalCadastrar}
onClose={onModalCadastrarClose}
>
<ModalOverlay />
<ModalContent >
  <ModalHeader>Cadastrar novo desenvolvedor</ModalHeader>
  <ModalCloseButton />
   <form onSubmit={btnCadastrar}> 
    <ModalBody pb={6}>
      <FormControl>
        <FormLabel>Nome</FormLabel>
        <Input
          type="text"
        />
      </FormControl>

      <FormControl id="idade" mt={4}>
        <FormLabel>Idade</FormLabel>
        <Input
          type="number"
          name="idade"
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Sexo</FormLabel>
        <Select
          name="sexo"
          placeholder="Selecione...">
          <option value="M">Homem</option>
          <option value="F">Mulher</option>
          <option value="X">Prefiro não informar</option>
        </Select>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Hobby</FormLabel>
        <Textarea
          resize="none"
          name="hobby"/>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Data de Nascimento</FormLabel>
        <InputMask mask="99/99/9999">
          {(inputProps) => <Input type="data" name="datanascimento" />}
        </InputMask>
      </FormControl>
    </ModalBody>
  {/* </form> 

   <ModalFooter>
    <Button colorScheme="blue" mr={3} onClick={btnCadastrar}>
      Cadastrar
    </Button>
    <Button onClick={onModalCadastrarClose} mr={3}>Fechar</Button>
  </ModalFooter> 
</ModalContent>
</Modal> */}

      <Modal
        isOpen={isModalEditar}
        onClose={onModalEditarClose}
      >
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>Editar novo desenvolvedor</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={btnEditar}>
          <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Nome</FormLabel>
                <Input
                  type="text"
                  value={nome}
                  name="nome"
                  onChange={(e) => setNome(e.target.value)}
                />
              </FormControl>

              <FormControl id="idade" mt={4}>
                <FormLabel>Idade</FormLabel>
                <Input
                  type="number"
                  name="idade"
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Sexo</FormLabel>
                <Select
                  name="sexo"
                  placeholder="Selecione..."
                  value={sexo}
                  onChange={(e) => setSexo(e.target.value)}>
                  <option value="M">Homem</option>
                  <option value="F">Mulher</option>
                  <option value="X">Prefiro não informar</option>
                </Select>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Hobby</FormLabel>
                <Textarea
                  resize="none"
                  name="hobby"
                  value={hobby}
                  onChange={(e) => setHobby(e.target.value)} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Data de Nascimento</FormLabel>
                <InputMask mask="99/99/9999"
                  value={datanascimento}
                  onChange={(e) => setDataNascimento(e.target.value)}  >
                  {(inputProps) => <Input type="data" name="datanascimento" />}
                </InputMask>
              </FormControl>
            </ModalBody>

          <ModalFooter>
            <Button colorScheme="orange" mr={3} onClick={btnEditar}>
              Editar
            </Button>
            <Button onClick={onModalEditarClose} mr={3}>Fechar</Button>
          </ModalFooter>
          </form>
        </ModalContent>
      </Modal>


      <Modal
        isOpen={isModalExcluir}
        onClose={onModalExcluirClose}
      >
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>Excluir desenvolvedor</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text>Deseja excluir o desenvolvedor ?</Text>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} >
              Excluir
            </Button>
            <Button onClick={onModalExcluirClose} mr={3}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


      <Container maxW="container.xl" bg={useColorModeValue('gray.50', 'gray.900')} px={0}>
        {/* <HStack spacing={8} alignItems={'center'} bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
          <h4>Developers</h4>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            <Button onClick={onModalCadastrar} colorScheme="teal" mr={5} size="sm">Cadastrar</Button>
          </HStack>
        </HStack> */}

        <Table variant="simple">
          <Thead>
            <Tr>
              <Th><Center >Excluir</Center></Th>
              <Th><Center >Editar</Center></Th>
              <Th>Nome</Th>
              <Th>Sexo</Th>
              <Th>Data de Nascimento</Th>
              <Th>Hobby</Th>
              <Th isNumeric><Center>Idade</Center></Th>
            </Tr>
          </Thead>
          <Tbody>
            {nomeList.map((val) => {
              return (
                <Tr>
                  <Td>
                    <Center >
                      <IconButton
                        onClick={() => { btnDelete(val.id) }}
                        size="xs"
                        variant="outline"
                        colorScheme="red"
                        aria-label="Excluir"
                        fontSize="18px"
                        icon={<AiOutlineClose />}
                      />
                    </Center>
                  </Td>
                  <Td>
                    <Center >
                      <IconButton
                        onClick={onModalEditar}
                        size="xs"
                        variant="outline"
                        colorScheme="red"
                        aria-label="Editar"
                        fontSize="18px"
                        icon={<AiTwotoneEdit />}
                      />
                    </Center>
                  </Td>
                  <Td> {val.nome} </Td>
                  <Td> {val.sexo} </Td>
                  <Td>{Moment(val.datanascimento).format('d/M/Y')} </Td>
                  <Td> {val.hobby} </Td>
                  <Td> <Center>{val.idade} </Center></Td>
                </Tr>
              )
            })
            }
          </Tbody>
        </Table>
      </Container>
    </>
  )
}

