
import React, {ReactNode} from 'react';
import { Modal as ModalComponent, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, Text, ModalBody, FormControl, 
    FormLabel, ModalFooter, Input, Button, Textarea, Select } from "@chakra-ui/react";
import InputMask from 'react-input-mask';
import { useState } from 'react';
import { useModalContext } from './context';


function ModalExcluir() {
    const {  modalState: {nome}, fecharModal} = useModalContext();
    return (
        <>
            <ModalBody pb={6}>
                <FormControl>
                    <FormLabel>Deseja excluir o desenvolvedor {nome} ?</FormLabel>
                </FormControl>
            </ModalBody>
        </>
    ) 
}
        

export default ModalExcluir;
      

