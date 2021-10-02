
import { Modal as ModalComponent, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Text } from "@chakra-ui/react";
import React from 'react';
import { useModalContext } from './context';
import ModalCadastrar from "./modalCadastrar";
import ModalExcluir from "./modalExcluir";



const ModalGenerico = ({ children }) => {
  const {  modalState: { title, destino, visible, nome}, fecharModal} = useModalContext();
  return (
    <>
    
    <ModalComponent isOpen={visible} onClose={fecharModal}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
          {destino=="Cadastrar"  ? (
            <ModalCadastrar />
          ) :  ( 
            <ModalExcluir />
          )}
      <ModalFooter>
        <Button variant="ghost">Secondary Action</Button>
      </ModalFooter>
    </ModalContent>
  </ModalComponent>
  </>
  )
}

export default ModalGenerico;