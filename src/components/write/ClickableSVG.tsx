import { useState } from 'react';
import styled from 'styled-components';

interface ClickableSVGProps {
  width: string;
  height: string;
}

const ClickableSVG = ({ width, height }: ClickableSVGProps) => {
  const [isActive, setIsActive] = useState(false);

  // 클릭 핸들러
  const toggleColor = () => setIsActive((prev) => !prev);

  return (
    <SVGContainer
      onClick={toggleColor}
      $fillColor={isActive ? '#666666' : '#D7D7D7'}
    >
      <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40ZM18.7844 28.0332L32.0874 14.0332L29.9126 11.9668L17.7362 24.7811L11.1232 17.3096L8.87677 19.2979L16.5738 27.9942L17.6578 29.2189L18.7844 28.0332Z"
          fill={isActive ? '#666666' : '#D7D7D7'}
        />
      </svg>
    </SVGContainer>
  );
};

export default ClickableSVG;

// Styled Component 스타일링
const SVGContainer = styled.div<{ $fillColor: string }>`
  cursor: pointer;

  svg path {
    transition: fill 0.3s ease; /* 색상 전환 애니메이션 */
  }

  &:hover svg path {
    fill: ${({ $fillColor }) => $fillColor}; /* 클릭 후 색상 변경 */
  }
`;