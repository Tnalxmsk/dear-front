import { useParams } from "react-router-dom";
import styled from "styled-components";

const LetterDetail = () => {
  const { title } = useParams();

  return (
    <DetailContainer>
      <Heading>상세 페이지</Heading>
      <SelectedItem>{`선택한 항목: ${title}`}</SelectedItem>
    </DetailContainer>
  );
};

export default LetterDetail;

const DetailContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #000000;
  margin-bottom: 1rem;
`;

const SelectedItem = styled.h2`
  font-size: 1.5rem;
  color: #000000; 
  font-weight: bold;
`;
