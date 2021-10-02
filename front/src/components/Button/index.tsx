import { ReactNode } from "react";
import { Button } from '@chakra-ui/react'
import { MouseEventHandler } from "react-router/node_modules/@types/react";
type ButtonProps = {
    colorScheme: string;
    onClick: MouseEventHandler;
    children: ReactNode;
}

const ButtonComponent = ({ children, onClick, colorScheme }: ButtonProps) => {
    return (
        <Button colorScheme={colorScheme} onClick={onClick}> {children} </Button>
    )
}


export default ButtonComponent;
