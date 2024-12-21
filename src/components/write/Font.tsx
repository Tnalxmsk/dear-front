import ClickableSVG from './ClickableSVG.tsx';
import styled from 'styled-components';
import { Font_TYPE_DETAILS, FontType } from '../../types/write/font.ts';

interface FontProps {
  type: FontType;
}

const Font = ({ type }: FontProps) => {
  const { label, description, example } = Font_TYPE_DETAILS[type];

  return (
    <Container>
      <Top>
        <Type>{label}</Type>
        <Description>{description}</Description>
      </Top>
      <Bottom>
        <Example $fontType={type}>{example}</Example>
        <ClickableSVG width="40" height="40" />
      </Bottom>
      <Divider />
    </Container>
  );
};

export default Font;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 21px 20px;
  background-image: url('/src/assets/bg-font.png');
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
`;

const Top = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 13px;
  align-items: center;
`;

const Type = styled.p`
  font: ${({ theme }) => theme.fonts.heading_regular_22px};
  color: black;
`;

const Description = styled.p`
  margin-top: 10px;
  font: ${({ theme }) => theme.fonts.paragraph_regular_14px};
  color: black;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Example = styled.p<{ $fontType: FontType }>`
  font-family: ${(props) => {
    switch (props.$fontType) {
      case FontType.TYPE_1:
        return 'handwriting-2019';
      case FontType.TYPE_2:
        return 'handwriting-2020';
      case FontType.TYPE_3:
        return 'handwriting-2021';
      case FontType.TYPE_4:
        return 'handwriting-2022';
      case FontType.TYPE_5:
        return 'handwriting-2023';
      default:
        return 'handwriting-2019';
    }
  }};
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 0%;
  color: #000;
`;

const Divider = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.black35};
  margin-top: 5px;
`;
