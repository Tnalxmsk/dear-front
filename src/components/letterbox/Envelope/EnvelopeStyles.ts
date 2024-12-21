import styled from "styled-components";

export const EnvelopeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 13.25rem;
  height: 13.8125rem;
  margin: 3.125rem auto 0;
  position: relative;
  cursor: pointer;
`;

export const EnvelopeContainer = styled.div<{ isRead: boolean }>`
  position: relative;
  width: 100%;
  height: ${({ isRead }) => (isRead ? "13.8125rem" : "9.125rem")};
  transition: height 0.3s ease-in-out;
`;

export const SaveIcon = styled.img<{ isRead: boolean }>`
  position: absolute;
  top: ${({ isRead }) => (isRead ? "-2rem" : "0.2rem")};
  right: 0.625rem;
  width: 1.25rem;
  height: 1.875rem;
  cursor: pointer;
  z-index: 2;
`;

export const EnvelopeImage = styled.img<{ isRead: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
`;

export const FrameImage = styled.div`
  position: absolute;
  bottom: 0.3125rem;
  right: 0.3125rem;
  width: 7.8125rem;
  height: 6.875rem;
  z-index: 2;
  background: url("/images/Frame.png") no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  
`;

export const InnerImage = styled.img`
  position: absolute;
  width: 6.25rem; 
  height: 4.9rem; 
  object-fit: cover; 
  margin-bottom: 0.8rem;
  margin-right: 0.2rem;

  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
`;

export const WaxSeal = styled.img`
  position: absolute;
  width: 3.125rem;
  height: 3.125rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 2;
`;
