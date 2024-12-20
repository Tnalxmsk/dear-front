import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { lettersData } from "../../../mock/lettersData";
import Tabs from "../../components/letterbox/Tabs";
import LetterList from "../../components/letterbox/LetterList";
import Pagination from "../../components/letterbox/Pagination";
import LetterDetail from "./LetterDetail/LetterDetail";
import S from "./LetterboxPage.styles";

const LetterboxPage = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("total");
  const [savedLetters, setSavedLetters] = useState<number[]>([]);
  const [letters, setLetters] = useState(
    lettersData.map((letter) => ({ ...letter, isRead: false }))
  );
  const [nickname] = useState("콩");
  const [selectedLetterId, setSelectedLetterId] = useState<number | null>(null);
  const [isLatestFirst, setIsLatestFirst] = useState(false);

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

  const sortedLetters = [...filteredLetters].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return isLatestFirst ? dateB - dateA : dateA - dateB;
  });

  const totalPages = Math.ceil(sortedLetters.length / itemsPerPage);

  const currentLetters = sortedLetters.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSelectedLetterId(null);
    setCurrentPage(1);
  };

  const handleSaveLetter = (id: number) => {
    setSavedLetters((prev) =>
      prev.includes(id) ? prev.filter((savedId) => savedId !== id) : [...prev, id]
    );
  };

  const handleLetterClick = (id: number) => {
    setLetters((prevLetters) =>
      prevLetters.map((letter) =>
        letter.id === id ? { ...letter, isRead: true } : letter
      )
    );
    setSelectedLetterId(id);
  };

  const handleCloseLetterDetail = () => {
    setSelectedLetterId(null);
    navigate("/letterbox");
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

  const toggleSortOrder = () => {
    setIsLatestFirst((prev) => !prev);
  };

  return (
    <S.Container>
      <S.Inner>
        <S.TitleContainer>
          <S.Circle />
          <S.Title>{nickname}님의 우편함입니다</S.Title>
        </S.TitleContainer>

        <Tabs activeTab={activeTab} onTabClick={handleTabChange} />
        <S.MainContent>
          {selectedLetterId === null ? (
            <>
              <S.SortToggleWrapper>
                <S.SortToggleText>최신순</S.SortToggleText>
                <S.SortToggleImage
                  isOn={isLatestFirst}
                  onClick={toggleSortOrder}
                />
              </S.SortToggleWrapper>
              <LetterList
                letters={currentLetters}
                onClick={handleLetterClick}
                onSave={handleSaveLetter}
                savedLetters={savedLetters}
                activeTab={activeTab}
                nickname={nickname}
              />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          ) : (
            <S.LetterDetailContainer>
              <LetterDetail
                id={selectedLetterId}
                onClose={handleCloseLetterDetail}
                onPrev={handlePrevLetter}
                onNext={handleNextLetter}
                onSaveToggle={handleSaveLetter}
                isSaved={savedLetters.includes(selectedLetterId!)}
              />
            </S.LetterDetailContainer>
          )}
        </S.MainContent>
      </S.Inner>
    </S.Container>
  );
};

export default LetterboxPage;
