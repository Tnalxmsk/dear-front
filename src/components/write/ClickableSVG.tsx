import React from 'react';
import styled from 'styled-components';

interface ClickableSVGProps {
  onClick?: () => void; // 클릭 시 호출될 함수
  width?: string;
  height?: string;
  color?: string;
}

const ClickableSVG: React.FC<ClickableSVGProps> = ({ onClick, width = '24px', height = '24px', color = '#000' }) => {
  return (
    <SVGContainer onClick={onClick} width={width} height={height} color={color}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={color}
        width={width}
        height={height}
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    </SVGContainer>
  );
};

export default ClickableSVG;

const SVGContainer = styled.div<{ width: string; height: string; color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    fill: ${({ color }) => color};
  }
`;