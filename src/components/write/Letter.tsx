import { AvailablePaperType, PAPER_TYPE_DETAILS, PaperType } from '../../types/write/write.ts';
import styled from 'styled-components';
import ClickableSVG from './ClickableSVG.tsx';

interface LetterProps {
  type: AvailablePaperType,
}

const Letter = ({ type }: LetterProps) => {
  const paperType = type.name as PaperType;
  const { label, src, description } = PAPER_TYPE_DETAILS[paperType];

  return (
    <Container $src={src}>
      <Content>
        <Title>{label}</Title>
        <Description>{description}</Description>
      </Content>
      <ClickableSVG width="40" height="40"/>
    </Container>
  );
};

export default Letter;

const Container = styled.div<{ $src: string }>`
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: url(${({ $src }) => $src}) no-repeat center center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.span`
  font: ${({ theme }) => theme.fonts.heading_regular_22px};
  color: black;
`;
const Description = styled.span`
  font: ${({ theme }) => theme.fonts.paragraph_regular_14px};
  color: black;
`;
