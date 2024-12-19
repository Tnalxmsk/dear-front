import React from 'react';
import styled from 'styled-components';

interface FooterProps {
    senderName: string;
    isPublic: boolean;
    onPublicChange: (value: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ senderName, isPublic, onPublicChange }) => {
    return (
        <FooterContainer>
            <FooterLeft>
                <FromLabel>From,</FromLabel>
                <SenderName>{senderName}</SenderName>
            </FooterLeft>
            <FooterRight>
                공개 여부
                <ToggleSwitch
                    type="checkbox"
                    checked={isPublic}
                    onChange={(e) => onPublicChange(e.target.checked)}
                />
            </FooterRight>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    color: #000;
`;

const FooterLeft = styled.div`
    display: flex;
    flex-direction: column;
`;

const FromLabel = styled.span`
    font-size: 1rem;
`;

const SenderName = styled.span`
    font-size: 1.25rem;
    font-weight: bold;
`;

const FooterRight = styled.label`
    display: flex;
    align-items: center;
`;

const ToggleSwitch = styled.input`
    margin-left: 0.5rem;
`;