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
  top: ${({ isRead }) => (isRead ? "0rem" : "2.1875rem")};
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

export const FrameImage = styled.img`
  position: absolute;
  bottom: 0.3125rem;
  right: 0.3125rem;
  width: 7.8125rem;
  height: 6.875rem;
  z-index: 2;
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
