
import { Modal as ModalComponent, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton} from "@chakra-ui/react";
import React from 'react';
import { useModalContext } from './context';
import ModalCadastrar from "./modalCadastrar";
import ModalExcluir from "./modalExcluir";
import ModalEditar from "./modalEditar";



const ModalGenerico = () => {
  const { modalState: { title, destino, visible }, fecharModal } = useModalContext();
  return (
    <>

      <ModalComponent isOpen={visible} onClose={fecharModal} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          {destino == "Cadastrar" &&
            <ModalCadastrar />
          }
          {destino == "Excluir" &&
            <ModalExcluir />
          }
          {destino == "Editar" &&
            <ModalEditar />
          }
        </ModalContent>
      </ModalComponent>
    </>
  )
}

export default ModalGenerico;