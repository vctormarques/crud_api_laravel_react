
import React from 'react';
import { ModalBody, FormControl, FormLabel, ModalFooter, Input, Button, Textarea, Select } from "@chakra-ui/react";
import InputMask from 'react-input-mask';
import { useModalContext } from './context';
import { useState } from 'react';
import api from '../../services/api';
import Moment from 'moment';

function ModalCadastrar() {
    const { modalState: { nomeEditar, idadeEditar, sexoEditar, hobbyEditar, datanascimentoEditar, uid  }, fecharModal } = useModalContext();
    const [nome, setNome] = useState(nomeEditar);
    const [idade, setIdade] = useState(idadeEditar);
    const [sexo, setSexo] = useState(sexoEditar);
    const [hobby, setHobby] = useState(hobbyEditar);
    const [datanascimento, setDataNascimento] = useState(Moment(datanascimentoEditar, 'YYYY-MM-DD').format('DD/MM/YYYY'));

    const btnEditar = (e) =>  {
        e.preventDefault();
        const {id} = e.target;
        api.put(`/${id}`,
            {
                nome: nome,
                sexo: sexo,
                idade: idade,
                hobby: hobby,
                datanascimento: datanascimento ,
            }).then(() => {
                alert("Editado com sucesso")
                window.location.reload();
            }).catch(function (error) {
                console.log(error);
            });
    }

    return (

        <>
            <ModalBody pb={6}>
                <FormControl>
                    <FormLabel>Nome</FormLabel>
                    <Input
                        type="text"
                        name={nome}
                        onChange={(e) => setNome(e.target.value)}
                        value={nome}
                    />
                </FormControl>

                <FormControl id="idade" mt={4}>
                    <FormLabel>Idade</FormLabel>
                    <Input
                        type="number"
                        name={idade}
                        onChange={(e) => setIdade(e.target.value)}
                        value={idade}
                    />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Sexo</FormLabel>
                    <Select
                        name={sexo}
                        placeholder="Selecione..."
                        onChange={(e) => setSexo(e.target.value)}
                        value={sexo}>
                        <option value="M">Homem</option>
                        <option value="F">Mulher</option>
                        <option value="X">Prefiro não informar</option>
                    </Select>
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Hobby</FormLabel>
                    <Textarea
                        resize="none"
                        name={hobby}
                        onChange={(e) => setHobby(e.target.value)}
                        value={hobby} />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Data de Nascimento</FormLabel>
                    <InputMask mask="99/99/9999"
                        name={datanascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                        value={datanascimento}>
                        {(inputProps) => <Input />}
                    </InputMask>
                </FormControl>
            </ModalBody>
            <ModalFooter>
                <Button 
                    colorScheme="orange" id={uid}
                    onClick={btnEditar}>Editar
                </Button>
                <Button ml={4} onClick={fecharModal} >Fechar</Button>
            </ModalFooter>
        </>
    )
}


export default ModalCadastrar;


