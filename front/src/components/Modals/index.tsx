import { Modal as ModalComponent, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure } from "@chakra-ui/react";
import React from 'react';
import { useModalContext } from './context';


const Modal = () => {
  const {  modalState: { title, visible}, fecharModal} = useModalContext();

  return (
    <ModalComponent isOpen={visible} onClose={fecharModal}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>

      </ModalBody>

      <ModalFooter>
        <Button variant="ghost">Secondary Action</Button>
      </ModalFooter>
    </ModalContent>
  </ModalComponent>
  )
}

export default Modal;