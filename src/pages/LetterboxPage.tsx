import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { lettersData } from "../../mock/lettersData";
import Header from "../components/common/Header";
import Tabs from "../components/letterbox/Tabs";
import LetterList from "../components/letterbox/LetterList";
import Pagination from "../components/letterbox/Pagination";
import LetterDetail from './LetterDetail';
const LetterboxPage = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("total");
  const [savedLetters, setSavedLetters] = useState<number[]>([]);
  const [letters, setLetters] = useState(
    lettersData.map((letter) => ({ ...letter, isRead: false })) // 읽음 여부 추가
  );
  const [nickname] = useState("콩");
  const [selectedLetterId, setSelectedLetterId] = useState<number | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("savedLetters");
    if (saved) setSavedLetters(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("savedLetters", JSON.stringify(savedLetters));
  }, [savedLetters]);

  const filteredLetters = letters.filter((letter) => {
    if (activeTab === "received") return letter.recipient === nickname;
    if (activeTab === "sent") return letter.sender === nickname;
    if (activeTab === "draft") return letter.sender === nickname && letter.recipient === nickname;
    if (activeTab === "save") return savedLetters.includes(letter.id);
    return true;
  });

  const totalPages = Math.ceil(filteredLetters.length / itemsPerPage);

  const currentLetters = filteredLetters.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSelectedLetterId(null); // 탭을 변경할 때 선택된 편지 정보를 초기화
    setCurrentPage(1); // 페이지도 1로 리셋
  };

  const handleSaveLetter = (id: number) => {
    setSavedLetters((prev) =>
      prev.includes(id) ? prev.filter((savedId) => savedId !== id) : [...prev, id]
    );
  };

  const handleLetterClick = (id: number) => {
    setLetters((prevLetters) =>
      prevLetters.map((letter) =>
        letter.id === id ? { ...letter, isRead: true } : letter // 읽음 여부 업데이트
      )
    );
    setSelectedLetterId(id); // 편지 선택 시 상세 보기로 전환
  };

  const handleCloseLetterDetail = () => {
    setSelectedLetterId(null); // 상세 보기 닫기
    navigate("/letterbox"); // 우편함으로 돌아가기
  };

  const handlePrevLetter = () => {
    if (selectedLetterId === null) return;
    const prevLetter = letters.find((letter) => letter.id === selectedLetterId - 1);
    if (prevLetter) setSelectedLetterId(prevLetter.id);
  };

  const handleNextLetter = () => {
    if (selectedLetterId === null) return;
    const nextLetter = letters.find((letter) => letter.id === selectedLetterId + 1);
    if (nextLetter) setSelectedLetterId(nextLetter.id);
  };

  return (
    <Container>
      <Header />
      <Inner>
        <TitleContainer>
          <Circle />
          <Title>{nickname}님의 우편함입니다</Title>
        </TitleContainer>
        <Tabs activeTab={activeTab} onTabClick={handleTabChange} />

        <MainContent>
          {selectedLetterId === null ? (
            <>
              <LetterList
                letters={currentLetters}
                onClick={handleLetterClick}
                onSave={handleSaveLetter}
                savedLetters={savedLetters}
              />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          ) : (
            <LetterDetailContainer>
              <LetterDetail
                id={selectedLetterId}
                onClose={handleCloseLetterDetail} // 상세 페이지 닫기
                onPrev={handlePrevLetter}
                onNext={handleNextLetter}
              />
            </LetterDetailContainer>
          )}
        </MainContent>
      </Inner>
    </Container>
  );
};

export default LetterboxPage;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;

const Inner = styled.div`
  flex: 1;
  width: 100%;
  margin-top: 80px;
  background-image: url("/images/letterboxback.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 740px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 1280px;
  margin-top: 70px;
  margin-left: 100px;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  color: #000;
  margin: 0;
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
  border-radius: 50%;
  margin-right: 15px;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

const LetterDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  margin: 2rem auto;
  background-color: white;
  border-radius: 5px;
  padding: 51.2px;
  box-shadow: none;
`;
