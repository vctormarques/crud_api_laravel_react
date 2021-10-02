
import React, {ReactNode} from 'react';
import { Modal as ModalComponent, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, Text, ModalBody, FormControl, 
    FormLabel, ModalFooter, Input, Button, Textarea, Select } from "@chakra-ui/react";
import InputMask from 'react-input-mask';
import { useState } from 'react';


function ModalCadastrar() {
    
const [nome, setNome] = useState("");
const [sexo, setSexo] = useState("");
const [idade, setIdade] = useState("");
const [hobby, setHobby] = useState("");
const [datanascimento, setDataNascimento] = useState("");


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
                    value={hobby}/>
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
        </>
    ) 
}
        

export default ModalCadastrar;
      

