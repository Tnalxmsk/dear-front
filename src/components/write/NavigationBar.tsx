import React from 'react';
import styled from 'styled-components';

interface NavigationBarProps {
    onLogoClick: () => void;
    onMenuClick: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ onLogoClick, onMenuClick }) => {
    return (
        <Container>
            <Logo onClick={onLogoClick}>Dearnote</Logo>
            <MenuButton onClick={onMenuClick}>☰</MenuButton>
        </Container>
    );
};

export default NavigationBar;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.8);
    color: #000;
`;

const Logo = styled.h1`
    font-size: 1.5rem;
    color: #000;
    cursor: pointer;
`;

const MenuButton = styled.button`
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    color: #000;
`;