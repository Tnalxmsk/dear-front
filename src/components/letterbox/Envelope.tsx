import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface EnvelopeProps {
  title: string;
}

const Envelope = ({ title }: EnvelopeProps) => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate(`/letterbox/${title}`); 
  };

  return (
    <EnvelopeContainer onClick={handleClick}> 
      <img src="/images/envelope.png" alt="ºÀÅõ" />
      <p>{`[${title}]`}</p>
    </EnvelopeContainer>
  );
};

export default Envelope;

const EnvelopeContainer = styled.div`
  width: 12.782rem;
  height: 7.8125rem;
  text-align: center;
  margin-bottom: 8.8125rem; 
  margin-left: 11.9375rem;
  margin-top: 0;
  row-gap: 5rem; 
  column-gap: 6.25rem; 
  cursor: pointer;


  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  p {
    margin-top: 1rem;
    font-size: 1rem;
    color: #000000;
    font-weight: bold;
  }
`;
