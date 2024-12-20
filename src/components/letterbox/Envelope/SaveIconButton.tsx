import React from "react";
import { SaveIcon } from "./EnvelopeStyles";

interface SaveIconButtonProps {
  isSaved: boolean;
  isRead: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const SaveIconButton = ({ isSaved, isRead, onClick }: SaveIconButtonProps) => {
  return (
    <SaveIcon
      src={isSaved ? "/images/saved2.png" : "/images/saved.png"}
      alt="즐겨찾기 아이콘"
      isRead={isRead}
      onClick={onClick}
    />
  );
};

export default SaveIconButton;
