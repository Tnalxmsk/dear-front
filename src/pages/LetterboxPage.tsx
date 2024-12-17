import { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Envelope from "../components/letterbox/Envelope";
import Pagination from "../components/letterbox/Pagination";
import styled from "styled-components";

const letters = [
  "낭만", "사랑", "슬픔","가천","실연","상실", "햇볕","겨울" ,"기억", "설렘", "상실", "벗", "겨울",
  "우정", "추억", "행복", "고백", "위로", "성장", "희망", "도전"
];

const MailboxPage = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [nickname, setNickname] = useState("콩");

  const totalPages = Math.ceil(letters.length / itemsPerPage);

  const currentLetters = letters.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    const fetchNickname = async () => {
      const fetchedNickname = "콩";
      setNickname(fetchedNickname);
    };
    fetchNickname();
  }, []);

  return (
    <Container>
      <Header />
      <Inner>
        <Title>
          {nickname}님의 우편함
        </Title>
          <EnvelopeGrid>
            {currentLetters.map((title, index) => (
              <Envelope key={index} title={title} />
            ))}
          </EnvelopeGrid>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
      </Inner>
    </Container>
  );
};

export default MailboxPage;

const Title = styled.h1`
  font-size: 2rem;
  margin-left: 160px; 
  margin-top: 50px; 
  text-align: left; 
  font-weight: bold;
  color: #000000;
  margin-bottom: 83px;
`;



const EnvelopeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  width: 1118.07px; 
  height: 402px;
  margin-left: 40px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100vh;
`;

const Inner = styled.div`
  position: relative;
  margin-top: 78px;
  font-size: 30px;
  width: 100vw;
  height: 723px;
  background-color: ${({ theme }) => theme.colors.black10 || "#D7D7D7"};
  padding: 20px 0;
`;
