import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const RandomQuote: React.FC = () => {
    const [quote, setQuote] = useState<{ word: string; quote: string }>({
        word: '기쁨',
        quote: '행복은 당신이 내리는 선택입니다.',
    });

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = async () => {
        // Simulate an API call to fetch a random quote
        setQuote({ word: '희망', quote: '희망은 어두운 날의 빛입니다.' });
    };

    const refreshQuote = async () => {
        // Simulate refreshing the quote
        setQuote({ word: '사랑', quote: '사랑은 모든 것을 이깁니다.' });
    };

    return (
        <QuoteContainer>
            <QuoteTitle>{quote.word}</QuoteTitle>
            <QuoteText>{quote.quote}</QuoteText>
            <RefreshButton onClick={refreshQuote}>새로고침</RefreshButton>
        </QuoteContainer>
    );
};

export default RandomQuote;

// Styled Components
const QuoteContainer = styled.div`
    text-align: center;
    margin: 1rem 0;
`;

const QuoteTitle = styled.h2`
    font-size: 2rem;
    color: #333;
`;

const QuoteText = styled.p`
    font-size: 1.25rem;
    color: #555;
`;

const RefreshButton = styled.button`
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;