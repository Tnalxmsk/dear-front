import React from 'react';
import styled from 'styled-components';

interface NavigationControlsProps {
    step: number;
    onPrevious: () => void;
    onNext: () => void;
    isNextDisabled: boolean;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({ step, onPrevious, onNext, isNextDisabled }) => {
    return (
        <Container>
            <NavButton onClick={onPrevious}>◀ 이전</NavButton>
            <StepIndicator>장 {step} / 5</StepIndicator>
            <NavButton onClick={onNext} disabled={isNextDisabled}>다음 ▶</NavButton>
        </Container>
    );
};

export default NavigationControls;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 2rem;
    color: #000;
`;

const NavButton = styled.button`
    font-size: 1rem;
    color: #000;
    cursor: pointer;
    &:disabled {
        color: gray;
        cursor: not-allowed;
    }
`;

const StepIndicator = styled.span`
    font-size: 1rem;
    color: #000;
`;