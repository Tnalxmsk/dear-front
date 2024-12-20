import styled from "styled-components";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  return (
    <PageWrapper>
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        isDisabled={currentPage === 1} 
      >
        {"<"}
      </PageButton>
      <PageNumber>{currentPage}</PageNumber>
      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        isDisabled={currentPage === totalPages} 
      >
        {">"}
      </PageButton>
    </PageWrapper>
  );
};

export default Pagination;

const PageWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 3rem;
  transform: translateX(-50%);
  width: 6.4375rem;
  height: 1.9375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.625rem;
`;

const PageButton = styled.button<{ isDisabled: boolean }>`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  color: ${({ isDisabled }) => (isDisabled ? "white" : "#000")}; 

  &:hover {
    color: ${({ isDisabled }) => (isDisabled ? "#aaa" : "#555")}; 
  }
`;

const PageNumber = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #000000;
`;
