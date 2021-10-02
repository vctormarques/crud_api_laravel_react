import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext({} as any);

const ModalProvider = ({ children }) => {
    const [modalState, setState] = useState({ visible: false });
    const abrilModal = (payload) => setState({ ...payload, visible: true });
    const fecharModal = () => setState({ visible: false });

    return (
        <ModalContext.Provider
            value={{ modalState, abrilModal, fecharModal }}>

            {children}
        </ModalContext.Provider>
    )
}

const useModalContext = () => {
    const context = useContext(ModalContext);
    const { modalState, abrilModal, fecharModal } = context;
    return { modalState, abrilModal, fecharModal };
}

export { useModalContext, ModalProvider }