
import React from 'react';
import { ModalBody, FormControl, FormLabel, ModalFooter, Input, Button, Textarea, Select } from "@chakra-ui/react";
import InputMask from 'react-input-mask';
import { useModalContext } from './context';
import { useState } from 'react';
import api from '../../services/api';


function ModalCadastrar() {
    const { fecharModal } = useModalContext();

    // interface InterfaceDesenvolvedor {
    //     nome: string, 
    //     sexo: string, 
    //     idade: number, 
    //     hobby: string, 
    //     datanascimento: Date,
    //   }
    
    const [nome, setNome] = useState("");
    const [sexo, setSexo] = useState("");
    const [idade, setIdade] = useState("");
    const [hobby, setHobby] = useState("");
    const [datanascimento, setDataNascimento] = useState("");

    const btnCadastrar = (e) => {
        e.preventDefault();
        api.post('/',
            {
                nome: nome,
                sexo: sexo,
                idade: idade,
                hobby: hobby,
                datanascimento: datanascimento,
            }).then(() => {
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
                    <Select type='hidden'
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
                        {(inputProps) => <Input type="data" name="datanascimento" />}
                    </InputMask>
                </FormControl>
            </ModalBody>
            <ModalFooter>
                <Button colorScheme="teal" onClick={btnCadastrar}>Cadastrar</Button>
                <Button ml={4} onClick={fecharModal}  >Fechar</Button>
            </ModalFooter>
        </>
    )
}


export default ModalCadastrar;


