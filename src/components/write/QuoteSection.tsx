import React from 'react';
import styled from 'styled-components';

interface QuoteSectionProps {
    quote: { word: string; quote: string };
    onRefresh: () => void;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({ quote, onRefresh }) => {
    return (
        <Section>
            <Title>{quote.word}</Title>
            <Quote>{quote.quote}</Quote>
            <RefreshButton onClick={onRefresh}>새로고침</RefreshButton>
        </Section>
    );
};

export default QuoteSection;

const Section = styled.div`
    text-align: center;
    color: #000;
`;

const Title = styled.h2`
    font-size: 2rem;
`;

const Quote = styled.p`
    font-size: 1.25rem;
`;

const RefreshButton = styled.button`
    margin-top: 1rem;
    padding: 0.5rem;
    cursor: pointer;
    color: #000;
`;