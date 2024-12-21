import Envelope from "./Envelope/Envelope";
import styled from "styled-components";

interface LetterListProps {
  letters: Array<{
    id: number;
    title: string;
    sender: string;
    recipient: string;
    date: string;
    isRead: boolean;
    sealColor?: string;
    caption: string;
    image: string;
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
          sealColor={letter.sealColor}
          onClick={onClick}
          onSave={onSave}
          isSaved={savedLetters.includes(letter.id)}
          isRead={letter.isRead}
          activeTab={activeTab}
          nickname={nickname}
          caption={letter.caption} 
          image={letter.image}
        />
      ))}
    </EnvelopeFlex>
  );
};

export default LetterList;

const EnvelopeFlex = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3.125rem 1.25rem;
  justify-content: center;
  width: 100%;
  max-width: 80rem;
  background: white;
  padding: 4.375rem 3.125rem;
  margin: 2.1875rem 0;
  border-radius: 0.3125rem;
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  max-height: 46.25rem;
  min-height: 46.25rem;
`;

