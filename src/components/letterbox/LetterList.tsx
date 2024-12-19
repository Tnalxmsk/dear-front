import Envelope from "./Envelope";
import styled from "styled-components";

interface LetterListProps {
  letters: Array<{
    id: number;
    title: string;
    sender: string;
    recipient: string;
    date: string;
    isRead: boolean;
  }>;
  onClick: (id: number) => void;
  onSave: (id: number) => void;
  savedLetters: number[];
  activeTab: string; 
  nickname: string; 
}

const LetterList = ({
  letters,
  onClick,
  onSave,
  savedLetters,
  activeTab,
  nickname,
}: LetterListProps) => {
  return (
    <EnvelopeFlex>
      {letters.map((letter) => (
        <Envelope
          key={letter.id}
          id={letter.id}
          title={letter.title}
          sender={letter.sender}
          recipient={letter.recipient}
          date={letter.date}
          onClick={onClick}
          onSave={onSave}
          isSaved={savedLetters.includes(letter.id)}
          isRead={letter.isRead}
          activeTab={activeTab}
          nickname={nickname}
        />
      ))}
    </EnvelopeFlex>
  );
};

export default LetterList;

const EnvelopeFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 20px; 
  justify-content: center; 
  width: 100%;
  max-width: 1280px;
  background: white;
  padding: 70px 50px;
  margin: 35px 0;
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  overflow: visible;
  min-height: 740px;
`;
