import { EnvelopeWrapper } from "./EnvelopeStyles";
import EnvelopeBody from "./EnvelopeBody";
import SaveIconButton from "./SaveIconButton";
import EnvelopeText from "./EnvelopeText";

interface EnvelopeProps {
  id: number;
  title: string;
  sender: string;
  recipient: string;
  date: string;
  sealColor?: string;
  caption: string; 
  onClick: (id: number) => void;
  onSave: (id: number) => void;
  isSaved: boolean;
  isRead: boolean;
  activeTab: string;
  nickname: string;
}

const Envelope = ({
  id,
  title,
  sender,
  recipient,
  date,
  sealColor,
  caption, 
  onClick,
  onSave,
  isSaved,
  isRead,
  activeTab,
  nickname,
}: EnvelopeProps) => {
  const handleEnvelopeClick = () => {
    onClick(id);
  };

  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSave(id);
  };

  const displayText =
    (activeTab === "received" && sender !== recipient)
      ? `From. ${sender}`
      : (activeTab === "sent" && sender !== recipient)
      ? `Dear. ${recipient}`
      : sender === nickname && recipient === nickname
      ? ""
      : sender === nickname
      ? `Dear. ${recipient}`
      : `From. ${sender}`;

  return (
    <EnvelopeWrapper>
      <EnvelopeBody
        isRead={isRead}
        sealColor={sealColor}
        onClick={handleEnvelopeClick}
  
        
      />
      <SaveIconButton
        isSaved={isSaved}
        isRead={isRead}
        onClick={handleSaveClick}
      />
      <EnvelopeText
        displayText={displayText}
        title={title}
        date={date}
      />
      {caption && <div>{caption}</div>}
      {date && <div>{date}</div>}
    </EnvelopeWrapper>
  );
};

export default Envelope;
