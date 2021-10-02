import logo from './img/logo512.png';
import Head from 'next/head'
import Image from 'next/image'
import api from '../src/services/api';
import React, { useState, useEffect } from 'react';
import Moment from 'moment';
import {Table, Thead, Tbody, Tr, Th, Td, IconButton, Box } from "@chakra-ui/react";
import { AiTwotoneEdit, AiOutlineClose } from 'react-icons/ai';
import { useModalContext } from '../src/components/Modals/context';

export default function Home() {
  const { abrilModal } = useModalContext();
  const [nomeList, setnomeList] = useState([]);


  useEffect(() => {
    api.get('/').then((response) => {
      setnomeList(response.data);
    }).catch(error => {
      if (error.response) {
        console.log(error.response);
      }
    });
  }, [])


  return (
    
      <Box overflowX="auto">
        <Table variant="simple" >
          <Thead>
            <Tr>
              <Th textAlign="center">Excluir</Th>
              <Th textAlign="center">Editar</Th>
              <Th>Nome</Th>
              <Th>Sexo</Th>
              <Th>Data de Nascimento</Th>
              <Th>Hobby</Th>
              <Th isNumeric textAlign="center">Idade</Th>
            </Tr>
          </Thead>
          <Tbody>
            {nomeList.map((val) => {
              return (
                <Tr key={val.id }>
                  <Td textAlign="center">
                    <IconButton
                      onClick={() => 
                        abrilModal({ 
                          title: 'Excluir Desenvolvedor', 
                          destino: 'Excluir', 
                          nome: val.nome, 
                          uid: val.id 
                        })
                      }
                      size="xs"
                      variant="outline"
                      colorScheme="red"
                      aria-label="Excluir"
                      fontSize="18px"
                      icon={<AiOutlineClose />}
                    />
                  </Td>
                  <Td textAlign="center">
                    <IconButton
                      onClick={() => abrilModal({
                        title: 'Editar Desenvolvedor', destino: 'Editar',
                        uid:  val.id,
                        nomeEditar: val.nome,
                        sexoEditar: val.sexo,
                        datanascimentoEditar: val.datanascimento,
                        hobbyEditar: val.hobby,
                        idadeEditar: val.idade,
                      })}
                      size="xs"
                      variant="outline"
                      colorScheme="red"
                      aria-label="Editar"
                      fontSize="18px"
                      icon={<AiTwotoneEdit />}
                    />
                  </Td>
                  <Td> {val.nome} </Td>
                  <Td> {val.sexo} </Td>
                  <Td>{Moment(val.datanascimento).format('d/M/Y')} </Td>
                  <Td> {val.hobby} </Td>
                  <Td textAlign="center"> {val.idade} </Td>
                </Tr>
              )
            })
            }
          </Tbody>
        </Table>
      </Box>
  )
}

