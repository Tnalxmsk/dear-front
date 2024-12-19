import React from 'react';
import styled from 'styled-components';

interface LetterHeaderProps {
    recipient: string | null;
    isSelfWriting: boolean; 
    isRegistered: boolean; 
}

const LetterHeader: React.FC<LetterHeaderProps> = ({ recipient, isSelfWriting, isRegistered }) => {
    if (isSelfWriting) {
        
        return null;
    }

    return (
        <Header>
            <DearLabel>Dear,</DearLabel>
            {isRegistered && recipient ? (
                <RecipientName>{recipient}</RecipientName>
            ) : (
                <Placeholder>상대방 이름 없음</Placeholder>
            )}
        </Header>
    );
};

export default LetterHeader;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    color: #000;
`;

const DearLabel = styled.span`
    font-size: 1.5rem;
`;

const RecipientName = styled.span`
    font-size: 1.25rem;
    font-weight: bold;
`;

const Placeholder = styled.span`
    font-size: 1.25rem;
    color: gray;
`;