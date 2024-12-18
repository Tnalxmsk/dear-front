import styled from 'styled-components';

const StatusBar = ({ step }: { step: number }) => {
  return (
    <Container>
      {Array.from({ length: 5 }, (_, index) => (
        <ItemBox key={index} $active={step === index + 1} />
      ))}
    </Container>
  );
};

export default StatusBar;

const Container = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  gap: 24px;
  margin: auto 0;
`;

const ItemBox = styled.div<{ $active: boolean }>`
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.black30};
  ${({ $active, theme }) =>
    $active
      ? `width: 20px; background: ${theme.colors.black70}; border-radius: 50%; `
      : `width: 15px; height: 15px; background: ${theme.colors.black10};border-radius: 50%;`}
`;
