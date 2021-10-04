import React from "react";
import {Table, Thead, Tbody, Tr, Th, Td, IconButton, Box } from "@chakra-ui/react";
import api from '../../services/api';
import Moment from 'moment';
import { AiTwotoneEdit, AiOutlineClose } from 'react-icons/ai';
import { useModalContext } from '../Modals/context';
import { useState, useEffect } from "react";

export default function Lista() {
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

    return(
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
                  <Td>{Moment(val.datanascimento, 'YYYY-MM-DD').format('DD/MM/YYYY')} </Td>
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