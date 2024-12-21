import React from 'react';
import styled from 'styled-components';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
    buttonText: string;
    onButtonClick: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message, buttonText, onButtonClick }) => {
    if (!isOpen) return null;

    return (
        <Overlay>
            <ModalContainer>
                <Message>{message}</Message>
                <ButtonGroup>
                    <CloseButton onClick={onClose}>닫기</CloseButton>
                    <ActionButton onClick={onButtonClick}>{buttonText}</ActionButton>
                </ButtonGroup>
            </ModalContainer>
        </Overlay>
    );
};

export default Modal;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContainer = styled.div`
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Message = styled.p`
    font-size: 1.25rem;
    color: #333;
    margin-bottom: 1rem;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
`;

const CloseButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: #ccc;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
        background-color: #aaa;
    }
`;

const ActionButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: #2E2E2E;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
        background-color: #0056b3;
    }
`;