import Envelope from "./Envelope";
import styled from "styled-components";

interface LetterListProps {
  letters: Array<{
    id: number;
    title: string;
    sender: string;
    date: string;
  }>;
  onClick: (id: number) => void;
  onSave: (id: number) => void;
  savedLetters: number[];
}

const LetterList = ({ letters, onClick, onSave, savedLetters }: LetterListProps) => {
  return (
    <EnvelopeFlex>
      {letters.map((letter) => (
        <Envelope
          key={letter.id}
          id={letter.id}
          title={letter.title}
          sender={letter.sender}
          date={letter.date}
          onClick={() => onClick(letter.id)}
          onSave={onSave}
          isSaved={savedLetters.includes(letter.id)}
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
  justify-content: flex-start;
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
;`