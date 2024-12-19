import React from 'react';
import styled from 'styled-components';

interface FooterProps {
    senderName?: string; // 서버에서 props로 전달, 기본값은 "Kai"
    isPublic: boolean;
    onPublicChange: (value: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ senderName = "Kai", isPublic, onPublicChange }) => {
    return (
        <FooterContainer>
            <FooterLeft>
                <FromLabel>From,</FromLabel>
                <SenderName>{senderName}</SenderName>
            </FooterLeft>
            <FooterRight>
                <ToggleContainer>
                    <ToggleLabel isPublic={isPublic} onClick={() => onPublicChange(!isPublic)}>
                        {isPublic ? "공개" : "비공개"}
                    </ToggleLabel>
                </ToggleContainer>
            </FooterRight>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    color: #000;
`;

const FooterLeft = styled.div`
    display: flex;
    flex-direction: column;
`;

const FromLabel = styled.span`
    font-size: 1rem;
    color: #333;
`;

const SenderName = styled.span`
    font-size: 1.25rem;
    font-weight: bold;
    color: #333;
`;

const FooterRight = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const ToggleContainer = styled.div`
    display: flex;
    align-items: center;
`;

interface ToggleLabelProps {
    isPublic: boolean;
}

const ToggleLabel = styled.button<ToggleLabelProps>`
    background-color: ${(props) => (props.isPublic ? "#007bff" : "#ccc")};
    color: ${(props) => (props.isPublic ? "#fff" : "#333")};
    border: none;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${(props) => (props.isPublic ? "#0056b3" : "#aaa")};
    }
`;