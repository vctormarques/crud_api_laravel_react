
import React from 'react';
import { ModalBody, FormControl, FormLabel, ModalFooter, Button } from "@chakra-ui/react";
import { useModalContext } from './context';
import ButtonComponent from '../Button';
import api from '../../services/api';


function ModalExcluir() {
    const { modalState: { nome, uid }, fecharModal } = useModalContext();

    const btnExcluir = (id) => {
        api.delete(`/${id}`).then(() => {
            window.location.reload();
        }).catch(error => {
            if (error.response) {
                console.log(error.response);
            }
        });
    }
    return (
        <>
            <ModalBody pb={6}>
                <FormControl>
                    <FormLabel>Deseja excluir o desenvolvedor {nome} ?</FormLabel>
                </FormControl>
            </ModalBody>
            <ModalFooter>
                <ButtonComponent
                    colorScheme="red"
                    onClick={() => { btnExcluir(uid) }}>
                    Excluir
                </ButtonComponent>
                <Button ml={4} onClick={fecharModal} >Fechar</Button>
            </ModalFooter>
        </>
    )
}


export default ModalExcluir;


